<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
// const x = await fetch("https://google.com/");
//const x = await fetch("http://oxygen.localhost:3000/public/cges/content.xlsx");
// console.log(await x.arrayBuffer());
// import * as XLSX from "xlsx/xlsx.mjs";

// async function parse_from_url(url) {
//   console.log("hi");
//   const res = await useFetch(url);
//   if (!res.ok) throw new Error("fetch failed");
//   const ab = await res.arrayBuffer();
//   // console.log("blob", ab);
//   const workbook = XLSX.read(ab);
//   return workbook;
// }

// const stringToArrayBuffer = (string) => {
//   let byteArray = new Uint8Array(string.length);
//   for (var i = 0; i < string.length; i++) {
//     byteArray[i] = string.codePointAt(i);
//   }
//   return byteArray;
// };

// function str2ab(str) {
//   var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
//   var bufView = new Uint16Array(buf);
//   for (var i = 0, strLen = str.length; i < strLen; i++) {
//     bufView[i] = str.charCodeAt(i);
//   }
//   return buf;
// }

// globalThis.CGEScontent = {};
// const g = globalThis.CGEScontent;

// const res = await useFetch("http://localhost:8000/content.xlsx");

//console.log(JSON.stringify(res), res);
//if (!res.ok) throw new Error("fetch failed");
// const ab = stringToArrayBuffer(res.data);
// const ab = str2ab(res.data);

// console.log("appvueblob", JSON.stringify(res));
// const wb = XLSX.read(ab);
// const wb = await parse_from_url("/public/cges/content.xlsx");
// const sheet = wb.Sheets[wb.SheetNames[0]];

// g.categories = XLSX.utils.sheet_to_json(wb.Sheets["Main Categories"]);
// console.log(
//   "categories",
//   XLSX.utils.sheet_to_json(wb.Sheets["Main Categories"])
// );
// g.projects = XLSX.utils.sheet_to_json(wb.Sheets["Projects Categories"]);

// g.cardTypes = XLSX.utils.sheet_to_json(wb.Sheets["CardTypes"]);
// g.fellows = XLSX.utils.sheet_to_json(wb.Sheets["Fellows Cards"]);
// g.toolkit = XLSX.utils.sheet_to_json(wb.Sheets["Toolkit Cards"]);
// g.newsEvents = XLSX.utils.sheet_to_json(wb.Sheets["News & Events Cards"]);
// g.resourceHub = XLSX.utils.sheet_to_json(wb.Sheets["Resource Hub Cards"]);
// g.womenOnDeathRow = XLSX.utils.sheet_to_json(
//   wb.Sheets["Women on Death Row Cards"]
// );
</script>
