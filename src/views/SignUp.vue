<template>
  <div>
    <button class="button" @click="signUp">Google Auth</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import firebase from "@/firebase";

@Component
export default class Home extends Vue {
  signUp() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((obj) => {
        if (obj.user !== null) {
          this.$router.push("/");
        }
      })
      .catch((error) => console.error(error.message));
  }
}
</script>
