<template>
  <!-- <il contentKey="Women on Death Row List" />
  <ig contentKey="Women on Death Row Cards" /> -->
  <v-card class="w-100 pa-6">
    <v-card-title class="d-flex justify-center">
      Women on Death Row Worldwide
    </v-card-title>

    <v-card-subtitle class="d-flex justify-center">
      <div class="w-75" style="text-wrap: wrap">
        This map highlights the countries where courts have sentenced women to
        death. Women are prosecuted and sentenced in criminal legal systems
        imbued with sexism, racism, xenophobia, classism, and ableism.
      </div>
    </v-card-subtitle>

    <v-card-text>
      <v-select
        id="countrySelect"
        v-model="selectedCountry"
        label="Select a Country"
        density="compact"
        :items="countryList"
        item-title="Name"
        item-value="ISO"
        @update:modelValue="onCountrySelect"
        class="w-25 mt-10 ml-8"
        style="min-width: 200px"
      />
      <div class="w-25 ml-8">
        <div
          style="
            min-width: 200px;
            margin-top: -10px;
            position: absolute;
            background-color: #fff9;
            width: fit-content;
          "
          v-html="hint"
        />
      </div>
      <svg-map
        :map="World"
        class="ma-10 mt-0"
        :location-class="getLocationClass"
        @mouseover="pointLocation"
        @mouseout="unpointLocation"
        @mousemove="moveOnLocation"
      />
      <div
        class="examples__block__map__tooltip"
        :style="
          'position: fixed; width: fit-content; padding: 10px; border: 1px solid darkgray; background-color: rgba(255, 255, 255, 0.95); ' +
          tooltipStyle
        "
      >
        <div v-html="pointedLocation" />
      </div>
    </v-card-text>

    <v-card-subtitle class="d-flex justify-center">
      <div class="w-75" style="text-wrap: wrap">
        This data was gathered as part of an ongoing long-term collaboration
        between the Cornell Center on the Death Penalty Worldwide, The Advocates
        for Human Rights, the Center on Gender and Extreme Sentencing, and the
        World Coalition Against the Death Penalty.
      </div>
    </v-card-subtitle>
  </v-card>
</template>

<script>
// import il from "../components/ItemList.vue";
// import ig from "../components/ItemGrid.vue";
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";

import { SvgMap } from "vue3-svg-map";
import World from "./world.js";

export default {
  components: {
    // il,
    // ig,
    SvgMap,
  },
  props: {},
  data() {
    return {
      World,
      pointedLocation: null,
      tooltipStyle: null,
      mapData: null,
      selectedCountry: null,
      hint: "",
    };
  },
  watch: {
    "websiteStore.data.AppColors"() {
      this.setColors();
    },
  },
  computed: {
    ...mapStores(useWebsiteStore),
    countryList() {
      return this.websiteStore?.data["WODR Map"] || [];
    },
    locationKey() {
      const lk = {};
      const mapData = this.websiteStore.data["WODR Map"];
      (mapData || []).forEach((l) => (lk[l.ISO] = l));
      return lk;
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log("enter");
  //   this.setColors();
  //   next();
  // },
  updated() {
    console.log("updated");
    this.setColors();
  },
  methods: {
    addDynamicRule(el, color) {
      // Dynamically create a style tag
      const style = document.createElement("style");
      style.type = "text/css";
      //style["data-dyncss"] = true;
      style.dataset.dyncss = true;

      // Define your dynamic CSS rule
      const cssRule = `
        ${el} {
          fill: ${color};
        }
      `;

      // Insert the CSS rule into the style tag
      style.appendChild(document.createTextNode(cssRule));

      // Append the style tag to the document head
      document.head.appendChild(style);
    },
    setColors() {
      const existing = document.querySelectorAll(`style[data-dyncss]`);
      if (existing.length) return;

      this.addDynamicRule();
      console.log("Set Colors");
      const colors = this.websiteStore?.data["AppColors"];
      if (!colors || colors?.length == 0) return;

      for (let i = 0; i < 5; i++) {
        if (colors[0][`map-color-${i}`])
          this.addDynamicRule(`.map-color-${i}`, colors[0][`map-color-${i}`]);
      }
    },
    getLocationName(node) {
      if (node?.attributes?.name) return node && node.attributes.name.value;
    },
    getLocationID(node) {
      if (node?.attributes?.id) return node && node.attributes.id.value;
    },
    getSelectedLocationName(map, locationId) {
      return (
        locationId &&
        map.locations.find((location) => location.id === locationId).name
      );
    },
    pointLocation(event) {
      if (!event.target.attributes?.name) return;
      this.pointedLocation = this.getLocationName(event.target);
      if (this.pointedLocation) {
        const id = this.getLocationID(event.target).toUpperCase();
        const lk = this.locationKey[id];
        if (lk) {
          this.pointedLocation += `<br/>Women: ${lk.WODR}<br/>Crime: ${
            lk.Crime || "N/A"
          }<br/>Type: ${lk.Legend}`;
        } else {
          // CGES has no data
          this.pointedLocation += `<br/>Women: N/A<br/>Crime: N/A`;
        }
      }
    },
    unpointLocation(event) {
      this.pointedLocation = null;
      this.tooltipStyle = { display: "none" };
    },
    moveOnLocation(event) {
      // this.tooltipStyle = {
      //   display: "block",
      //   top: `${event.clientY + 10}px`,
      //   left: `${event.clientX - 100}px`,
      // };
      // console.log(event);
      if (this.pointedLocation) {
        this.selectedCountry = null;
        this.hint = "";
        this.tooltipStyle = `display:block; top:${event.clientY + 10}px; left:${
          event.clientX - 100
        }px;`;
      } else this.tooltipStyle = "";
    },
    getLocationClass(location, index) {
      // Generate heat map
      const legend = [
        "",
        "Abolitionist",
        "Abolitionist for common law crimes",
        "De facto abolitionist",
        "Retentionist",
      ];
      const id = location.id.toUpperCase();
      const lk = this.locationKey[id];
      if (lk) {
        return `svg-map__location map-color-${legend.indexOf(lk.Legend)}`;
      } else {
        return `svg-map__location map-color-0`;
      }
    },
    onCountrySelect(ISO) {
      const lk = this.locationKey[ISO];
      if (lk) {
        this.hint = `<b>Women:</b> ${lk.WODR} <br/><b>Crime:</b> ${
          lk.Crime || "N/A"
        } <br/><b>Type:</b> ${lk.Legend}`;
      } else {
        // CGES has no data
        this.hint += `<br/>Women: N/A<br/>Crime: N/A`;
      }
      return;
    },
  },
};
</script>

<style>
.svg-map__location {
  stroke: rgba(0, 0, 0, 0.2);
  stroke-width: 1px;
  transition: fill 1s;
}

.map-color-0 {
  fill: #b1b7c1;
}
/* .map-color-1 {
  fill: #75d7cd;
}
.map-color-2 {
  fill: #0071c5;
}
.map-color-3 {
  fill: #004792;
}
.map-color-4 {
  fill: #2c3968;
} */
</style>
