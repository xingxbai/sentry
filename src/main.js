// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";

Sentry.init({
  dsn:
    "https://673c5517d0444fb991706457939195db@o406377.ingest.sentry.io/5277878",
  integrations: [new VueIntegration({ Vue, attachProps: true })],
});

Raven.config(
  "https://673c5517d0444fb991706457939195db@o406377.ingest.sentry.io/5277878",
  {
    release: process.env.RELEASE_VERSION,
    debug: true,
  }
)
  .addPlugin(RavenVue, Vue)
  .install();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
