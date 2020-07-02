<template>
  <div id="signUpForm">
    <RadiusButton @push="signUpGoogle">Googleでログイン</RadiusButton>
    <MessageBar v-show="message != ''">{{ message }}</MessageBar>
    <p>メールアドレスで登録</p>
    <input type="text" class="input" placeholder="Mail" v-model="email" />
    <input
      type="password"
      class="input"
      placeholder="Password"
      v-model="password"
    />
    <div class="button_group">
      <RadiusButton color="secondary" class="login" @push="signInMail">
        ログイン
      </RadiusButton>
      <RadiusButton color="primary" @push="signUpMail">
        新規登録
      </RadiusButton>
    </div>
    <RadiusButton @push="demo">デモアカウント</RadiusButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "@/firebase";
import RadiusButton from "@/components/atoms/RadiusButton.vue";
import MessageBar from "@/components/atoms/MessageBar.vue";

@Component({
  components: {
    MessageBar,
    RadiusButton
  }
})
export default class SignUpForm extends Vue {
  message = "";
  email = "";
  password = "";
  mounted() {
    document.title = `Likes- SingUp`;
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
        this.$emit("error", error.message);
        console.error(error.message);
      });
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
