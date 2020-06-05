<template>
  <div id="header">
    <span id="title">Likes</span>
    <Avator class="avator" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Avator from "@/components/Avator.vue";

@Component({
  components: {
    Avator
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
</style>
