<template>
  <div>
    <p v-for="(history, index) in historys" :key="index">
      {{ history.toDate() | dateFormat("YYYY.MM.DD") }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BuyHisroty extends Vue {
  @Prop() historys?: Date[];
}
</script>
