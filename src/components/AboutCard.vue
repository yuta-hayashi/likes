<template>
  <div class="about_card">
    <div class="about_img_container">
      <div class="about_back about_back2"></div>
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
  border-radius: 50% 50% 42% 58% / 52% 50% 50% 48% ;
  animation: morph 8s ease-in-out infinite;
  background: var(--back);
  width: 100%;
  height: 105%;
  opacity: 0.8;
}
.about_back2{
  animation: morph 10s ease-in-out infinite;
  background:var(--primary);
  width:105%;
  height: 108%;
  opacity: 0.6;
  }

@keyframes morph {
  0% {
    border-radius:50% 50% 42% 58% / 52% 50% 50% 48% ;
  }
  50% {
    border-radius:64% 36% 57% 43% / 30% 64% 36% 70%  ;
  }
  100% {
    border-radius: 50% 50% 42% 58% / 52% 50% 50% 48% ;
  }
}
</style>
