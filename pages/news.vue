<template>
  <il contentKey="News List" />
  <ig contentKey="News Cards" />
</template>

<script>
import ig from "../components/ItemGrid.vue";
import il from "../components/ItemList.vue";
// import sitejson from "~/public/cges/content.json";

export default {
  components: {
    ig,
    il,
  },
  props: {},
  async mounted() {
    // function str2ab(str) {
    //   var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    //   var bufView = new Uint16Array(buf);
    //   for (var i = 0, strLen = str.length; i < strLen; i++) {
    //     bufView[i] = str.charCodeAt(i);
    //   }
    //   return buf;
    // }
    //cges/content.xlsx
    // const res = await useFetch("/wave.svg");
    // console.log("svg", JSON.stringify(j));
    // const ab = str2ab(res.data);
    // // console.log("appvueblob", JSON.stringify(res));
    // const wb = XLSX.read(ab);
    // // const sheet = wb.Sheets[wb.SheetNames[0]];
    // this.content = XLSX.utils.sheet_to_json(wb.Sheets["News & Events Cards"]);
    // console.log("asdf", this.content);
  },
  data() {
    // globalThis.CGEScontent.newsEvents
    return {};
  },
  methods: {},
};
</script>
