// import siteData from "~/public/cges/test.json";
import * as XLSX from "xlsx/xlsx.mjs";

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
      const wb = await this.parse_from_url("https://cges-zeta.vercel.app/cges/content.xlsx");
      for (const s of wb.SheetNames) this.data[s] = XLSX.utils.sheet_to_json(wb.Sheets[s]);
      console.log("sitedata", this.data);
    },
  },
});
