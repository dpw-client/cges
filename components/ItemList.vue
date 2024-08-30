<template>
  <div class="w-100 d-flex flex-column justify-center align-center">
    <div
      v-for="c of content"
      :key="c"
      :class="`${childWidth} d-flex flex-column justify-center align-center`"
      :style="`background-color:${c.Background}; color:${c.Foreground};`"
    >
      <div v-if="c.Type == 'title'" style="font-size: 40px" class="mb-8 w-75">
        <center>{{ unquote(c.Section) }}</center>
      </div>
      <div
        v-if="c.Type == 'normal'"
        style="font-size: 20px"
        class="mb-4 w-75"
        v-html="unquote(c.Section)"
      />
      <!-- {{ unquote(c.Section) }}
      </div> -->

      <div
        v-if="c.Type == 'bg-image'"
        :style="`background-image: url(/cges/img/${c.Background}); background-size: cover; background-position: center; background-repeat: no-repeat;`"
      >
        <ItemList :contentKey="c.Section" childWidth="w-75 rounded" />
      </div>

      <v-parallax
        v-if="c.Type == 'bg-parallax'"
        :src="`/cges/img/${c.Background}`"
        class="align-center"
      >
        <ItemList :contentKey="c.Section" childWidth="w-75 rounded" />
      </v-parallax>

      <div v-if="c.Type == 'picture'" style="font-size: 20px" class="mb-4 w-25">
        <v-img :src="`/cges/img/${c.Section}`"> </v-img>
      </div>
      <div v-if="c.Type == 'space'" class="mb-16" />
    </div>
  </div>
</template>
<script>
// import siteData from "~/public/cges/localization.json";
import { mapStores } from "pinia";
import { useWebsiteStore } from "~~/stores/website";

export default {
  name: "ItemList",
  components: {},
  props: {
    contentKey: {
      type: String,
      required: true,
      default: "",
    },
    childWidth: {
      type: String,
      required: false,
      default: "w-100",
    },
  },
  computed: {
    ...mapStores(useWebsiteStore),
    content() {
      return this.websiteStore.data[this.contentKey];
    },
  },
  // data() {
  //   return {
  //     content: siteData[this.contentKey],
  //   };
  // },
  methods: {
    unquote(str) {
      if (
        (str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))
      )
        return str.slice(1, -1); // Return the substring
      return str;
    },
  },
};
</script>

<style>
/* unvisited link */
a:link {
  color: #000a;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #000a;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: #0006;
  text-decoration: none;
}

/* selected link */
a:active {
  color: #000f;
  text-decoration: none;
}
</style>
