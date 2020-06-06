<template>
  <div id="header">
    <InstallButton class="button_install" />
    <span id="title">Likes</span>
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
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 50px;
}
#title {
  font-size: 24px;
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
