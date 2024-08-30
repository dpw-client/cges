<template>
  <div>
    <!-- {{ "hi" + JSON.stringify(websiteStore.data) }} -->
    <Carousel
      class="mt-4 h-75 ma-auto"
      :autoplay="4000"
      :items-to-show="2.5"
      :wrap-around="true"
    >
      <Slide v-for="row in carousel" :key="row">
        <v-img
          class="carousel__item"
          :src="`/cges/img/${row.picture}`"
          @deprecated-click="openPDF(row.file)"
        >
          <div
            style="
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column-reverse;
            "
          >
            <div class="text-white" style="background-color: #0009">
              {{ row.title }}
            </div>
          </div></v-img
        >
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <!-- <div
      class="w-100 mt-6 pb-6"
      sstyle="background-image: url('/cges/bg.png'); background-repeat: repeat"
    >
      <div
        v-for="c of content"
        :key="c"
        class="w-100 d-flex pt-4"
        :style="`background-color:${c.BgColor}; color:${c.FgColor};`"
      >
        <div class="d-flex w-75 justify-center ma-auto">
          <div v-if="c.Type == 'title'" style="font-size: 40px" class="mb-8">
            {{ unquote(c.Section) }}
          </div>
          <div v-if="c.Type == 'normal'" style="font-size: 20px" class="mb-4">
            {{ unquote(c.Section) }}
          </div>
          <div v-if="c.Type == 'space'" class="mb-16" />
        </div>
      </div> -->
    <!-- <div class="ma-auto d-flex flex-row">
        <v-row class="w-75 justify-center" v-if="false">
          <div class="w-25 ma-4">
            <div class="mt-6 w-100 text-h6 font-weight-bold">Projects</div>
            <v-card class="mt-6 w-100" v-for="slide in 5" :key="slide">
              <v-card-item class="pa-1 bg-gold mb-4">
                <v-card-title class="ml-2">This is a title</v-card-title>

                <v-card-subtitle class="ml-2"
                  >This is a subtitle</v-card-subtitle
                >
              </v-card-item>

              <v-card-text>
                {{ li.generateSentences(parseInt(Math.random() * 5)) }}
              </v-card-text>
            </v-card>
          </div>
          <div class="w-25 ma-4">
            <div class="mt-6 w-100 text-h6 font-weight-bold">Events</div>
            <v-card class="mt-6 w-100" v-for="slide in 5" :key="slide">
              <v-card-item class="pa-1 bg-rust mb-4">
                <v-card-title class="ml-2">This is a title</v-card-title>

                <v-card-subtitle class="ml-2"
                  >This is a subtitle</v-card-subtitle
                >
              </v-card-item>

              <v-card-text>
                {{ li.generateSentences(parseInt(Math.random() * 5)) }}
              </v-card-text>
            </v-card>
          </div>
        </v-row>
      </div> -->
    <il contentKey="Landing" />
    <!-- </div> -->
  </div>
</template>

<script setup>
// import { useWebsiteStore } from "~~/stores/website";
// const website = useWebsiteStore();
// const site = website.data;
</script>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";
// const website = useWebsiteStore();
// const site = website.data;
// const websiteStore = mapStores(useWebsiteStore);
// console.log(websiteStore);

import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// import siteData from "~/public/cges/localization.json";
import il from "~/components/ItemList.vue";
// import { LoremIpsum } from "lorem-ipsum";
// import * as XLSX from "xlsx/xlsx.mjs";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    il,
  },
  async mounted() {
    // const wb = await this.parse_from_url("/cges/content.xlsx");
    // const sheet = wb.Sheets[wb.SheetNames[0]]
    // this.categories = XLSX.utils.sheet_to_json(wb.Sheets['Main Categories']);
    // console.log("len", wb.SheetNames, JSON.stringify(json));
    // console.log(JSON.stringify(json));
    // function resizeIframe() {
    //   var iframe = document.getElementById("content-frame");
    //   if (iframe) {
    //     iframe.style.height =
    //       iframe.contentWindow.document.body.scrollHeight + "px";
    //   }
    // }
    // document.getElementById("content-frame").onload = resizeIframe;
    // const wb = await this.parse_from_url("/cges/content.xlsx");
    // this.content = siteData["Landing"];
    // this.carousel = siteData["Carousel"];
  },
  data() {
    return {
      //categories: [],
      // layout: "default",
      // content: [],
      // carousel: [],
    };
  },
  computed: {
    ...mapStores(useWebsiteStore),
    content() {
      return this.websiteStore.data["Landing"];
    },
    carousel() {
      return this.websiteStore.data["Carousel"];
    },
  },
  methods: {
    openPDF(name) {
      window.open(`/cges/pdf/${name}`, "_blank");
    },
    // async parse_from_url(url) {
    //   const res = await fetch(url);
    //   if (!res.ok) throw new Error("fetch failed");
    //   const ab = await res.arrayBuffer();
    //   console.log("blob", ab);
    //   const workbook = XLSX.read(ab);
    //   return workbook;
    // },
  },
};
</script>
