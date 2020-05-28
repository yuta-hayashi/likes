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
    <p>GitHub</p>
    <p>Made by yuta.run</p>
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
</style>
