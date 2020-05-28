<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import "@/assets/globalStyle.css";
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import firebase from "@/firebase";

@Component
export default class App extends Vue {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const name = user.displayName != null ? user.displayName : user.email!;
        const uid = user.uid;
        userModule.signUp({ name: name, uid: uid });
      }
    });
  }
}
</script>
