<template>
  <div>
    <SettingProfile />
    <SettingLinkList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SettingProfile from "@/components/organisms/SettingProfile.vue";
import SettingLinkList from "@/components/molecules/SettingLinkList.vue";

@Component({
  components: {
    SettingProfile,
    SettingLinkList
  }
})
export default class SettingTemp extends Vue {}
</script>
