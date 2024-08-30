<template>
  <div class="d-flex ga-4 ma-4">
    <div class="w-25" v-if="types.length > 1" style="min-width: 200px">
      <!-- FILTER -->
      <div>Filter by:</div>
      <v-list>
        <v-list-item
          v-for="(item, i) in ['All', ...types]"
          :key="i"
          :value="item"
          :active="item == filter"
          rounded="xl"
          color="secondary"
          @click="() => filterBy(item)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <!-- GRID -->
    <div>
      <div>
        <b>{{ content.length }}</b> Found:
      </div>
      <div class="d-flex flex-wrap ga-6 justify-left pa-4">
        <!-- title	subtitle	abstract_image	abstract	body	attachments	is_dialog	type -->
        <v-card
          v-for="c of content"
          :key="c"
          :style="`width: 300px; border-top: 2px solid ${cardTypes[c.type]};`"
          @click="openURL(c.attachments)"
        >
          <v-card-item>
            <v-card-title v-if="'title' in c" style="text-wrap: wrap">
              <b>{{ unquote(c.title) }}</b>
            </v-card-title>
            <v-card-subtitle v-if="'subtitle' in c">{{
              unquote(c.subtitle)
            }}</v-card-subtitle>
            <template v-slot:prepend v-if="'abstract_image' in c">
              <v-avatar size="64" rounded="0">
                <v-img :src="`/cges/img/${c.abstract_image}`"></v-img>
              </v-avatar>
            </template>
          </v-card-item>
          <v-card-text>
            <div v-if="'abstract' in c">{{ c.abstract }}</div>
            <!-- <div v-if="'attachments' in c"> -->
            <!-- <div v-for="(a, i) in parseURLs(c.attachments)"> -->
            <!-- <div
                class="pt-3"
                @click="openURL(a)"
                style="font-weight: 700; cursor: pointer"
              >
                Link {{ i + 1 }}
              </div> -->
            <!-- </div> -->
            <!-- </div> -->
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useWebsiteStore } from "~~/stores/website";
// const website = useWebsiteStore();
// const siteData = website.data;
</script>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";
// import siteData from "~/public/cges/localization.json";

export default {
  props: {
    // items: {
    //   type: Array,
    //   required: true,
    //   default: Array,
    // },
    contentKey: {
      type: String,
      required: true,
      default: "",
    },
  },
  async mounted() {
    //globalThis.CGEScontent.cardTypes
    // console.log("mw", await $fetch("/cges/localization.json"));
    // for (const t of siteData["Card Types"]) this.cardTypes[t.type] = t.color;
    // this.all = siteData[this.contentKey];
    // this.content = this.all;
    // this.types = [...new Set(this.content.map((d) => d.type.trim()))];
  },
  data() {
    return {
      cardTypes: {},
      filter: "All",
      fcontent: null, // filtered content
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
    all() {
      return this.websiteStore.data[this.contentKey] || [];
    },
    content() {
      return this.fcontent || this.all;
    },
    types() {
      return [...new Set(this.all.map((d) => d.type.trim()))];
    },
  },
  methods: {
    unquote(str) {
      if (
        (str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))
      )
        return str.slice(1, -1); // Return the substring
      return str;
    },
    // parseURLs(s) {
    //   return s.split(" ").filter((u) => u != "");
    // },
    openURL(url) {
      if (url.startsWith("http")) window.open(url, "_blank");
      else window.open("/cges/pdf/" + url, "_blank");
    },
    filterBy(type) {
      console.log("here");
      this.filter = type;
      if (type == "All") this.fcontent = null;
      else this.fcontent = this.all.filter((o) => o.type == type);
    },
  },
};
</script>
