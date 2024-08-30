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
      <svg-map
        :map="World"
        class="ma-10"
        :location-class="getLocationClass"
        @mouseover="pointLocation"
        @mouseout="unpointLocation"
        @mousemove="moveOnLocation"
      />
      <div
        class="examples__block__map__tooltip"
        :style="
          'position: fixed; width: 200px; padding: 10px; border: 1px solid darkgray; background-color: white; ' +
          tooltipStyle
        "
      >
        {{ pointedLocation }}
      </div>
      MAP nav w mouse/kbd
      <br />
      legend: Abolitionist, Abolitionist for common law crimes, De facto
      abolitionist, Retentionist
    </v-card-text>

    <v-card-subtitle class="d-flex justify-center">
      <div class="w-75" style="text-wrap: wrap">
        This data was gathered as part of an ongoing long-term collaboration
        between the Cornell Center on the Death Penalty Worldwide, The Advocates
        for Human Rights, the Center on Gender and Extreme Sentencing, and the
        World Coalition Against the Death Penalty.
      </div>
    </v-card-subtitle>

    <!-- <v-card-actions>
      <v-btn color="primary">Learn More</v-btn>
      <v-btn color="secondary">Share</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
// import il from "../components/ItemList.vue";
// import ig from "../components/ItemGrid.vue";
import { SvgMap } from "vue3-svg-map";
import World from "./world.js";

export default {
  components: {
    // il,
    // ig,
    SvgMap,
  },
  props: {},
  mounted() {},
  data() {
    return { World, pointedLocation: null, tooltipStyle: null };
  },
  methods: {
    getLocationName(node) {
      if (node?.attributes?.name) return node && node.attributes.name.value;
    },
    getSelectedLocationName(map, locationId) {
      return (
        locationId &&
        map.locations.find((location) => location.id === locationId).name
      );
    },
    pointLocation(event) {
      this.pointedLocation = this.getLocationName(event.target);
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
      this.tooltipStyle = `display:block; top:${event.clientY + 10}px; left:${
        event.clientX - 100
      }px;`;
    },
    getLocationClass(location, index) {
      // Generate heat map
      return `svg-map__location svg-map__location--heat${index % 4}`;
    },
  },
};
</script>
