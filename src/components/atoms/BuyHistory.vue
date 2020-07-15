<template>
  <ul class="historyList">
    <li
      v-for="(history, index) in historys"
      :key="index"
      class="historyList_content"
    >
      {{ history.toDate() | dateFormat("YYYY.MM.DD") }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BuyHisroty extends Vue {
  @Prop() historys?: Date[];
}
</script>

<style scoped>
.historyList {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.historyList_content {
  list-style: none;
  margin: 0 auto;
  padding: 0.5em;
  position: relative;
  font-size: 1.2em;
  border-left: 3px #c4c4c4 solid;
  padding-left: 30px;
}
.historyList_content:before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  background: var(--primary);
  position: absolute;
  left: -0.3em;
  top: 0.8em;
  border-radius: 100%;
}
</style>
