<template>
  <div id="signUpForm">
    <MessageBar v-if="message != ''">{{ message }}</MessageBar>
    <button class="button" @click="signUpGoogle">Googleでログイン</button>
    <hr />
    <input type="text" class="input" placeholder="Mail" v-model="email" />
    <input
      type="password"
      class="input"
      placeholder="Password"
      v-model="password"
    />
    <div class="button_group">
      <button class="button button_secondary login" @click="signInMail">
        ログイン
      </button>
      <button class="button button_primary" @click="signUpMail">
        新規登録
      </button>
    </div>
    <button class="button" @click="demo">デモアカウント</button>

    <router-link to="/about">
      このアプリについて
    </router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import firebase from "@/firebase";
import MessageBar from "@/components/MessageBar.vue";

@Component({
  components: {
    MessageBar
  }
})
export default class Home extends Vue {
  message = "";
  email = "";
  password = "";
  mounted() {
    document.title = `Likes- SingUp`;
  }
  signUpMail() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((obj) => {
        if (obj.user !== null) {
          this.$router.push("/");
        }
      })
      .catch((error) => {
        this.message = error.message;
        console.error(error.message);
      });
  }
  signInMail() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then((obj) => {
        if (obj.user !== null) {
          this.$router.push("/");
        }
      })
      .catch((error) => {
        this.message = error.message;
        console.error(error.message);
      });
  }
  signUpGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((obj) => {
        if (obj.user !== null) {
          this.$router.push("/");
        }
      })
      .catch((error) => {
        this.message = error.message;
        console.error(error.message);
      });
  }
  demo() {
    this.email = "demo@yuta.run";
    this.password = "demo@yuta.run";
    this.signInMail();
  }
}
</script>

<style scoped>
#signUpForm {
  display: flex;
  flex-direction: column;
}
.login {
  margin-right: 2em;
}
</style>
