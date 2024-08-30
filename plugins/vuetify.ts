// plugins/vuetify.ts

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // your config will come here
    theme: {
      defaultTheme: "site",
      themes: {
        site: {
          dark: false,
          colors: {
            // wes anderson: Royal Tennenbaums
            gold: "#E5D755",
            rust: "#DC614A",
            "lt-blue": "#9EDFC9",
            lilac: "#D4A8E2",
            purple: "#472D47",
            background: "#FFFFFF",
            surface: "#FAFAFA",
            textl: "#FFFFFF",
            textg: "#AEB0B0",
            primary: "#7CB39D",
            // 'primary-darken-1': '#3700B3',
            secondary: "#A0007D",
            // 'secondary-darken-1': '#018786',
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
