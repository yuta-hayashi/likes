<template>
  <div class="about_locations">
    <input
      v-for="i in length"
      type="radio"
      :value="i"
      v-model="currentId"
      class="about_location"
      :key="i"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AboutLocation extends Vue {
  @Prop() currentId!: number;
  @Prop() length!: number;
}
</script>

<style scoped>
.about_locations {
  display: flex;
  margin: 1em auto;
}
.about_locations > input {
  visibility: hidden;
  margin: 2px;
}
.about_location:after {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #c4c4c4;
  content: "";
  display: inline-block;
  visibility: visible;
}

.about_location:checked:after {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: var(--primary);
  content: "";
  display: inline-block;
  visibility: visible;
}
</style>
