<template>
  <div>
    <div class="profile">
      <Avator />
      <div class="profile_info">
        <div class="name">{{ name }}</div>
        <div>{{ email }}</div>
      </div>
    </div>
    <button class="button" @click="signOut">Sign Out</button>
    <div class="link_list">
      <router-link to="/about" class="link_item">このアプリについて</router-link>
      <a href="https://github.com/yuta-hayashi/likes" target="_blank" class="link_item">GitHub</a>
      <a href="https://yuta.run" target="_blank" class="link_item">Made by yuta.run</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "../store/user";
import firebase, { auth } from "firebase";
import Avator from "@/components/Avator.vue";

@Component({
  components: { Avator }
})
export default class Setting extends Vue {
  mounted() {
    document.title = `Likes - Setting`;
  }
  get name() {
    return userModule.name;
  }
  get email() {
    return userModule.email;
  }

  signOut() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("singout");
          userModule.signOut();
        })
        .catch((error) => console.error(error));
    });
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: left;
  margin: 2em auto 2em 2em;
}
.profile_info {
  display: block;
  text-align: left;
  margin-left: 1em;
}
.name {
  font-size: 1.2em;
}
.link_list{
  text-align: left;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  border-top: solid 2px #c4c4c4;
}
.link_item{
  padding: 1em;
  border-bottom:solid 2px #c4c4c4;
}
a{
  text-decoration: none;
  color: #000;
}
</style>
