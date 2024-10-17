<template>
  <div class="d-flex ga-4 ma-4">
    <div class="w-25" v-if="types.length > 1" style="min-width: 200px">
      <!-- FILTER -->
      <div>Filter by:</div>
      <v-list>
        <v-list-item v-for="(item, i) in ['All', ...types]" :key="i" :value="item" :active="item == filter" rounded="xl" :color="site?.AppColors?.[0]?.Primary ?? '#b1b7c1'" @click="() => filterBy(item)">
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
        <v-card v-for="c of content" :key="c" :style="`width: 300px; border-top: 2px solid ${cardTypes[c.Type]};`" @click="openURL(c.Attachments)">
          <v-card-item>
            <v-card-title v-if="'Title' in c" style="text-wrap: wrap">
              <b>{{ unquote(c.Title) }}</b>
            </v-card-title>
            <v-card-subtitle v-if="'Subtitle' in c">{{ unquote(c.Subtitle) }}</v-card-subtitle>
            <template v-slot:prepend v-if="'Image' in c">
              <v-avatar size="64" rounded="0">
                <v-img :src="`/cges/img/${c.Image}`"></v-img>
              </v-avatar>
            </template>
          </v-card-item>
          <v-card-text>
            <div v-if="'Abstract' in c">{{ c.Abstract }}</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";

export default {
  props: {
    contentKey: {
      type: String,
      required: true,
      default: "",
    },
  },
  async mounted() {},
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
      return [...new Set(this.all.map((d) => d.Type.trim()))];
    },
  },
  methods: {
    unquote(str) {
      if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) return str.slice(1, -1); // Return the substring
      return str;
    },
    openURL(url) {
      if (url.startsWith("http")) window.open(url, "_blank");
      else window.open("/pdf/" + url, "_blank");
    },
    filterBy(type) {
      console.log("here");
      this.filter = type;
      if (type == "All") this.fcontent = null;
      else this.fcontent = this.all.filter((o) => o.Type == type);
    },
  },
};
</script>
