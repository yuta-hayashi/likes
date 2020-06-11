<template>
  <div class="about_card">
    <div class="about_img_container">
      <div class="about_back"></div>
      <img class="about_img" :src="content.imgUrl" />
    </div>
    <div>
      <h3 class="about_title">{{ content.title }}</h3>
      <p class="about_body">{{ content.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AboutCard extends Vue {
  @Prop() content!: object;
}
</script>

<style scoped>
.about_card {
  display: inline-block;
  margin: 0px 30px;
}
.about_img {
  width: 100%;
  height: auto;
}
.about_title {
  margin-top: 2em;
  font-weight: bold;
  font-size: 1.2em;
}
.about_body {
  white-space: pre-wrap;
  line-height: 1.5em;
  font-size: 1em;
  height: 5em;
}
.about_img_container {
  margin: 0 auto;
  position: relative;
  width: 80%;
  height: auto;
}
.about_img_container::before {
  content: "";
  display: block;
  padding-top: 10%;
}
.about_back {
  top: 0;
  position: absolute;
  z-index: -1;
  border-radius: 30% 70% 45% 55% / 60% 60% 40% 40%;
  animation: morph 8s ease-in-out infinite;
  background: var(--back);
  width: 100%;
  height: 105%;
}

@keyframes morph {
  0% {
    border-radius: 30% 70% 45% 55% / 60% 60% 40% 40%;
  }
  50% {
    border-radius: 79% 21% 64% 36% / 62% 26% 74% 38%;
  }
  100% {
    border-radius: 30% 70% 45% 55% / 60% 60% 40% 40%;
  }
}
</style>
