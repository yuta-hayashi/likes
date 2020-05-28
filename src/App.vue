<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import "normalize.css";
import "@/assets/globalStyle.css";
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import firebase from "@/firebase";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header
  }
})
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
