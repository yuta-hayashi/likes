<template>
  <router-link to="/setting">
    <img class="avator_img" :src="photoUrl" />
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import { persionIcon } from "@/assets/ui/persion.svg";

@Component
export default class Avator extends Vue {
  get photoUrl() {
    const url = userModule.photoUrl;
    if (url != "") {
      return userModule.photoUrl;
    } else {
      // デフォルト画像を返す
      return "/person.svg";
    }
  }
}
</script>

<style scoped>
.avator_img {
  width: 40px;
  border-radius: 14px;
  background-color: #ffffff;
}
</style>
