<template>
  <div>
    dP:{{ deferredPrompt }}
    <button v-if="deferredPrompt" @click="promptInstall">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BeforeInstallPromptEvent } from "vue-pwa-install";

@Component
export default class InstallButton extends Vue {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;

  private promptInstall() {
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

  private created() {
    this.$on("canInstall", (event: BeforeInstallPromptEvent) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt:
      event.preventDefault();

      // Stash the event so it can be triggered later:
      this.deferredPrompt = event;
    });
  }
}
</script>
