// import siteData from "~/public/cges/test.json";
import * as XLSX from "xlsx/xlsx.mjs";
import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("website", {
  state: () => {
    return {
      data: {},
    };
  },

  actions: {
    async parse_from_url(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("fetch failed");
      const ab = await res.arrayBuffer();
      console.log("blob", ab);
      const workbook = XLSX.read(ab);
      return workbook;
    },
    async fetch() {
      // const res = await fetch("/test.json");
      // const json = await res.blob();
      // console.log("Getting site data", json);
      const wb = await this.parse_from_url("/content.xlsx");
      // const sheet = wb.Sheets[wb.SheetNames[0]];
      for (const s of wb.SheetNames) this.data[s] = XLSX.utils.sheet_to_json(wb.Sheets[s]);
      console.log("sitedata", this.data);

      //if (json) Object.assign(this.data, json);
    },
  },
});
