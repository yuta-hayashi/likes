import Vue from "vue";
import firebase from "firebase/app";

declare module "vue/types/vue" {
  interface Vue {
    $analytics: firebase.analytics.Analytics;
  }
}
