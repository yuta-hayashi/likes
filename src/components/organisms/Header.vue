<template>
  <div id="header">
    <RadiusButton
      v-if="deferredPrompt"
      @push="promptInstall"
      class="button_install"
      >インストール</RadiusButton
    >
    <router-link to="/"> <span id="title">Likes</span></router-link>
    <router-link to="/setting"> <Avator class="avator"/></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Avator from "@/components/atoms/Avator.vue";
import RadiusButton from "@/components/atoms/RadiusButton.vue";
import { BeforeInstallPromptEvent } from "vue-pwa-install";

@Component({
  components: {
    Avator,
    RadiusButton
  }
})
export default class Header extends Vue {
  deferredPrompt: BeforeInstallPromptEvent | null = null;
  promptInstall() {
    console.log("click promptInstall✌");
    if (this.deferredPrompt) {
      // Show the prompt:
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt:
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }

        this.deferredPrompt = null;
      });
    }
  }
}
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
  top: 0;
  right: 0;
  margin: 5px;
}
.button_install {
  position: absolute;
  left: 5px;
}
</style>
