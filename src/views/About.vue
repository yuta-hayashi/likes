<template>
  <div class="about">
    <div class="card_row" :style="position">
      <AboutCard :content="aboutContents[1]" />
      <AboutCard :content="aboutContents[2]" />
      <AboutCard :content="aboutContents[3]" />
      <AboutCard :content="aboutContents[4]" />
    </div>
    <div class="about_location">
      <input
        v-for="i in 4"
        type="radio"
        :value="i"
        v-model="currentId"
        :key="i"
      />
    </div>
    <div class="about_navi">
      <span @click="$router.push('/')" class="about_navi_left">Skip</span>
      <span @click="nextCard" class="about_navi_right">Next</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import AboutCard from "@/components/AboutCard.vue";
@Component({
  components: {
    AboutCard,
  },
})
export default class AboutPage extends Vue {
  position = "";
  currentId = 1;
  aboutContents = {
    1: {
      id: 1,
      imgUrl: "img/illust/about1.svg",
      title: "写真でメモる",
      body: `詰め替え商品を買い物に行くと使っているものを忘れてしまうことがありませんか？
      Likesは日用品を写真でメモすることができるアプリです。`,
    },
    2: {
      id: 2,
      imgUrl: "img/illust/about2.svg",
      title: "買い物忘れ防止に",
      body: `次買おうと思ってても、つい忘れてしまう…
      Likesで記録しておけば、同じものをすぐに探せます。`,
    },
    3: {
      id: 3,
      imgUrl: "img/illust/about3.svg",
      title: "Webがアプリに",
      body: `PWAに対応しているので、ウェブサイトをホーム画面に追加できます。
      Webがアプリとして使えることをご体感ください。`,
    },
    4: {
      id: 4,
      imgUrl: "img/illust/about4.svg",
      title: "クラウド同期",
      body: `スマートフォンからパソコンまで全ての端末で同じ情報にアクセスできます。`,
    },
  };
  nextCard() {
    if (this.currentId == 4) this.$router.push("/");
    this.position = `transform: translateX(-${this.currentId * 100}%)`;
    this.currentId++;
  }
}
</script>

<style>
.about {
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.about_navi {
  font-size: 18px;
}
.about_navi_left {
  position: absolute;
  margin: 0 0 2em 2em;
  left: 0;
  color: #c4c4c4;
}
.about_navi_right {
  position: absolute;
  margin: 0 2em 2em 0;
  right: 0;
  color: var(--primary);
}

.card_row {
  white-space: nowrap;
  width: 100%;
  transition: transform 0.5s;
}
.about_location {
  display: flex;
  margin: 1em auto;
}
input {
  visibility: hidden;
  margin: 2px;
}
input[type="radio"]:after {
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

input[type="radio"]:checked:after {
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
