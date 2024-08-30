<template>
  <div>
    <div class="bg-primary logo">
      <div class="pt-4 ml-6 mr-6 pb-4">
        <div class="d-flex flex-row justify-start align-center">
          <NuxtLink to="/">
            <div class="icon mr-4"></div>
          </NuxtLink>
          <!-- <v-icon color="white">mdi-face-woman</v-icon> -->
          <div class="icon-text">Center on Gender and Extreme Sentencing</div>
          <!-- {{ "hi" + site?.FAQ?.[0]?.["Organization:"] }} -->
          <!-- <div v-html="givegabHTML" /> -->
        </div>

        <v-divider
          class="border-opacity-50 mt-4 mb-4"
          color="white"
        ></v-divider>
        <div
          v-if="!show.projects"
          class="d-flex flex-nowrap justify-space-between"
        >
          <div />
          <div>
            <span v-for="(c, i) of site['Main Categories']" :key="c">
              <v-btn
                :to="c.link.startsWith('/') ? `${c.link}` : undefined"
                color="textl"
                variant="text"
                :text="`${c.category}`"
                prepend-icon="mdi-square"
                @click="toggleShow(c.link)"
                :id="`${c.link}-activator`"
              />

              <v-menu
                v-if="c.link == 'projects'"
                activator="#projects-activator"
              >
                <v-list>
                  <v-list-item
                    v-for="(item, index) in site['Projects Categories']"
                    :key="index"
                    :value="index"
                    :to="item.link.startsWith('/') ? `${item.link}` : undefined"
                  >
                    <v-list-item-title>{{ item.category }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </div>
          <v-btn
            class="mt-6"
            color="secondary"
            text="Donate Now"
            @click="
              openTab(
                'https://www.givegab.com/donation_widget?campaign_id=174243&group_id=508492&preview=%22%22'
              )
            "
          />
        </div>
        <!-- C requested projects be a dropdown 16.06.24 -->
        <!-- <div v-if="show.projects">
          <span>
            <v-btn
              color="textl"
              variant="text"
              text="<"
              @click="toggleShow('projects')"
            />
          </span>
          <span v-for="(c, i) of projects" :key="c">
            <v-btn
              :to="c.link.startsWith('/') ? `${c.link}` : undefined"
              color="textl"
              variant="text"
              :text="`${c.category}`"
              prepend-icon="mdi-square"
              @click="toggleShow(c.link)"
            />
          </span>
        </div> -->
      </div>
    </div>
    <slot site="dorkus"></slot>
  </div>
  <div class="bg-primary">
    <!-- <div class="footer-top"></div> -->
    <div
      class="text-textl ml-4 mr-4 pb-4 pt-4 d-flex flex-nowrap justify-space-between"
    >
      <span>© 2024 Center on Gender and Extreme Sentencing</span>
      <span>
        <!-- <v-icon>mdi-facebook</v-icon> -->
        <!-- <v-icon>mdi-twitter</v-icon> -->
        <!-- <v-icon>mdi-youtube</v-icon> -->
        <!-- <v-icon>mdi-linkedin</v-icon> -->
        <v-icon
          @click="
            () => openTab('https://www.instagram.com/genderjusticenow_cges/')
          "
          >mdi-instagram</v-icon
        >
        <v-icon @click="() => openTab('mailto:clh288@cornell.edu')"
          >mdi-email</v-icon
        >
      </span>
    </div>
  </div>
</template>

<script setup>
// import { useWebsiteStore } from "~~/stores/website";
// const website = useWebsiteStore();
// const site = website.data;
// //website.fetch();
</script>

<script>
// import { mapState } from "pinia";
import { useWebsiteStore } from "~~/stores/website";
//import useWebsiteStore from "/stores/site.ts";
//wait callOnce(website.fetch);
const website = useWebsiteStore();
const site = website.data;
website.fetch();
// console.log("mwmwmwmwmw", site);
// if (site?.FAQ?.[0]?.["Organization:"]) {
//   site.FAQ[0]["Organization:"] = "ugh";
// }

// import siteData from "~/public/cges/localization.json";

export default {
  components: {},
  async mounted() {},
  data() {
    return {
      // categories: siteData["Main Categories"],
      // projects: siteData["Projects Categories"],
      show: { projects: false },
      // givegabHTML: "",
    };
  },
  mounted() {
    // const script = document.createElement("script");
    // script.src =
    //   "https://givegab.s3.amazonaws.com/donation-widget/givegab-button.js";
    // document.body.appendChild(script);
    // const onloadHandler = () => {
    //   console.log("here");
    //   this.givegabHTML = `<button
    //           class="givegab-button"
    //           data-campaign-id="174243"
    //           data-host="https://www.givegab.com"
    //           data-org-id="508492"
    //           data-preview=""
    //           style="background-color: #8fc1e3"
    //         >
    //           Donate Now
    //         </button>
    //   `;
    // };
    // script.onload = onloadHandler.bind(this);
    // this.givegabHTML = `
    //     <script src="https://givegab.s3.amazonaws.com/donation-widget/givegab-button.js" ></`;
    // this.givegabHTML += `script>
    //
    //   `;
    // document.getElementById("givegab").innerHTML = this.givegabHTML;
    // fetch("/site.json")
    //   .then((response) => console.log("test", response.status) || response)
    //   .then((response) => response.json())
    //   .then((body) => this.website.assign(body));
    // 404 in dev mode
    // fetch("/cges/test.json")
    // .then((response) => console.log("test", response.status) || response)
    // .then((response) => response.text())
    // .then((body) => console.log(body));
    // THIS WORKS TO LOAD FILE DYNAMICALLY
  },
  computed: {
    //...mapState(useWebsiteStore),
  },
  methods: {
    // async parse_from_url(url) {
    //   const res = await fetch(url);
    //   if (!res.ok) throw new Error("fetch failed");
    //   const ab = await res.arrayBuffer();
    //   // console.log("blob", ab);
    //   const workbook = XLSX.read(ab);
    //   return workbook;
    // },
    toggleShow(name) {
      // C requested Projects be a dropdown.
      // if (name in this.show) this.show[name] = !this.show[name]; // turn on new menu level
    },
    openTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&display=swap"); */
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'); */
/* @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Sen:wght@400..800&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

html {
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
}

.logo {
  font-family: "Noto Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: white;
}

.icon {
  background-image: url("/cges/img/logo.png");
  background-size: cover;
  width: 90px;
  height: 90px;
}

.icon-text {
  color: white;
}

.footer-top {
  background-image: url("/wave.svg");
  background-size: cover;
  width: 100%;
  height: 100px;
}
</style>
