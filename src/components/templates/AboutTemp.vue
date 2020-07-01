<template>
  <AboutView />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutView from "@/components/organisms/AboutView.vue";

@Component({
  components: {
    AboutView
  }
})
export default class AboutTemp extends Vue {}
</script>
