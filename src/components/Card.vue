<template>
  <div class="card" :class="[size, { is_to_buy: toBuy }]">
    <img class="card_img" :src="imgUrl" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() private imgUrl!: string;
  @Prop() private size!: string;
  @Prop() private toBuy!: boolean;
}
</script>

<style scoped>
.small {
  width: 140px;
  height: 140px;
}
.big {
  width: 270px;
  height: 270px;
}
.card {
  overflow: hidden;
  position: relative;
  background-color: var(--back);
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
.is_to_buy {
  border: solid 2px var(--primary);
  box-shadow: 0px 4px 20px rgba(216, 154, 158, 0.9);
}
.card > .card_img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
}
</style>
