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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
