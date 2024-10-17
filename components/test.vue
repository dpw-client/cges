<template>
  <div>
    <v-btn @click="click()" color="secondary" prepend-icon="mdi-plus">clickme</v-btn>
  </div>
</template>

<script>
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  data() {
    return {
      data: { sheet1: [] },
    };
  },
  async mounted() {
    // console.log("hi");
    // const wb = await this.parse_from_url("/text.xlsx");
    // const sheet = wb.Sheets[wb.SheetNames[0]]
    // const json = XLSX.utils.sheet_to_json(sheet);
    // console.log("len", wb.SheetNames, JSON.stringify(json));
  },
  methods: {
    click() {
      console.log("hi ");
    },
    async parse_from_url(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const ab = await res.arrayBuffer();
      console.log("blob", ab);
      const workbook = XLSX.read(ab);
      return workbook;
    },
  },
};
</script>
