<template>
  <div>
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
            <div
              v-if="row.title"
              class="text-white"
              style="background-color: #0009"
            >
              {{ row.title }}
            </div>
          </div></v-img
        >
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <il contentKey="Landing List" />
  </div>
</template>

<script setup></script>

<script>
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";

import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import il from "~/components/ItemList.vue";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    il,
  },
  async mounted() {},
  data() {
    return {};
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
  },
};
</script>
