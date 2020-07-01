<template>
  <div class="profile">
    <Avator />
    <div class="profile_info">
      <div class="name">{{ name }}</div>
      <div>{{ email }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Avator from "@/components/atoms/Avator.vue";

@Component({
  components: { Avator }
})
export default class SettingProfileInfo extends Vue {
  @Prop() name!: string;
  @Prop() email!: string;
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
