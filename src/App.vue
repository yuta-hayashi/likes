<template>
  <div id="app">
    <Header />
    <router-view class="content" />
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
        const name =
          user.displayName != null ? user.displayName : (user.email as string);
        const email = user.email as string;
        const uid = user.uid;
        const photoURL = user.photoURL != null ? user.photoURL : "";
        userModule.signUp({
          name: name,
          uid: uid,
          photoUrl: photoURL,
          email: email
        });
      }
    });
  }
}
</script>

<style>
.content {
  padding-top: 50px;
}
</style>
