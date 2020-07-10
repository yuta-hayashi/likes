<template>
  <div id="signUpForm">
    <RadiusButton @push="signUpGoogle">Googleで認証</RadiusButton>
    <MessageBar v-show="message != ''">{{ message }}</MessageBar>
    <p class="sub_title">メールアドレスで認証</p>
    <TextInput placeholder="Mail" :value="email" @input="email = $event" />
    <TextInput
      placeholder="Password"
      type="password"
      :value="password"
      @input="password = $event"
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
import TextInput from "@/components/atoms/TextInput.vue";

@Component({
  components: {
    MessageBar,
    RadiusButton,
    TextInput
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
.sub_title {
  margin-top: 2em;
  margin-bottom: -1em;
}
</style>
