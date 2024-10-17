<template>
  <div>
    <div class="logo dflt-color" :style="`background-color: ${site?.AppColors?.[0]?.Primary}`">
      <div class="pt-4 ml-6 mr-6 pb-4">
        <div class="d-flex flex-row justify-start align-center">
          <NuxtLink to="/">
            <div class="icon mr-4"></div>
          </NuxtLink>
          <div class="icon-text">Center on Gender and Extreme Sentencing</div>
        </div>

        <v-divider class="border-opacity-50 mt-4 mb-4" color="white"></v-divider>
        <div v-if="!show.projects" class="d-flex flex-nowrap justify-space-between">
          <div />
          <div>
            <span v-for="(c, i) of site['Main Categories']" :key="c">
              <v-btn :to="c.link.startsWith('/') ? `${c.link}` : undefined" color="textl" variant="text" :text="`${c.category}`" prepend-icon="mdi-square" @click="toggleShow(c.link)" :id="`${c.link}-activator`" />

              <v-menu v-if="c.link == 'projects'" activator="#projects-activator">
                <v-list>
                  <v-list-item v-for="(item, index) in site['Projects Categories']" :key="index" :value="index" :to="item.link.startsWith('/') ? `${item.link}` : undefined">
                    <v-list-item-title>{{ item.category }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </div>
          <v-btn class="mt-6" :color="site?.AppColors?.[0]?.Secondary ?? '#b1b7c1'" text="Donate Now" @click="openTab('https://www.givegab.com/donation_widget?campaign_id=174243&group_id=508492&preview=%22%22')" />
        </div>
      </div>
    </div>
    <slot site="dorkus"></slot>
  </div>
  <div class="dflt-color" :style="`background-color: ${site?.AppColors?.[0]?.Primary}`">
    <div class="text-textl ml-4 mr-4 pb-4 pt-4 d-flex flex-nowrap justify-space-between">
      <span>© 2024 Center on Gender and Extreme Sentencing</span>
      <span>
        <v-icon @click="() => openTab('https://www.instagram.com/genderjusticenow_cges/')">mdi-instagram</v-icon>
        <v-icon @click="() => openTab('mailto:clh288@cornell.edu')">mdi-email</v-icon>
      </span>
    </div>
  </div>
</template>

<script setup></script>

<script>
import { useWebsiteStore } from "~~/stores/website";
const website = useWebsiteStore();
const site = website.data;
website.fetch();

export default {
  components: {},
  async mounted() {},
  data() {
    return {
      show: { projects: false },
      site,
    };
  },
  mounted() {},
  computed: {},
  methods: {
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
  transition: color 1s;
}

.logo {
  font-family: "Noto Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: white;
}

.icon {
  background-image: url("/img/logo.png");
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

.dflt-color {
  background-color: #b1b7c1;
  transition: background-color 1.5s;
}
</style>
