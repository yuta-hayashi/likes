<template>
  <AboutTemp />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutTemp from "@/components/templates/AboutTemp.vue";

@Component({
  components: {
    AboutTemp
  }
})
export default class AboutPage extends Vue {}
</script>
