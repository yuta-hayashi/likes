<template>
  <div id="header">
    <InstallButton class="button_install" />
    <router-link to="/"> <span id="title">Likes</span></router-link>
    <Avator class="avator" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Avator from "@/components/Avator.vue";
import InstallButton from "@/components/InstallButton.vue";

@Component({
  components: {
    Avator,
    InstallButton
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
#header {
  background-color: var(--back);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 2;
}
a {
  text-decoration: none;
}
#title {
  font-size: 24px;
  color: var(--primary);
}
.avator {
  position: absolute;
  right: 0;
  margin: 5px;
}
.button_install {
  position: absolute;
  left: 5px;
}
</style>
