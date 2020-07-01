<template>
  <SettingTemp />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SettingTemp from "@/components/templates/SettingTemp.vue";

@Component({
  components: {
    SettingTemp
  }
})
export default class SettingPage extends Vue {}
</script>
