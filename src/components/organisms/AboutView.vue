<template>
  <div class="about_view">
    <div class="card_list" :style="position">
      <AboutCard
        v-for="content in aboutContents"
        :content="content"
        :key="content.id"
      />
    </div>
    <AboutLocation :currentId="currentId" :length="aboutContents.length" />
    <AboutNavi @next="nextCard" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AboutCard from "@/components/molecules/AboutCard.vue";
import AboutLocation from "@/components/atoms/AboutLocation.vue";
import AboutNavi from "@/components/atoms/AboutNavi.vue";

@Component({
  components: {
    AboutCard,
    AboutLocation,
    AboutNavi
  }
})
export default class AboutView extends Vue {
  position = "";
  currentId = 1;
  aboutContents = [
    {
      id: 1,
      imgUrl: "img/illust/about1.svg",
      title: "写真でメモる",
      body: `詰め替え商品を買い物に行くと使っているものを忘れてしまうことがありませんか？
      Likesは日用品を写真でメモすることができるアプリです。`
    },
    {
      id: 2,
      imgUrl: "img/illust/about2.svg",
      title: "買い物忘れ防止に",
      body: `次買おうと思ってても、つい忘れてしまう…
      Likesで記録しておけば、同じものをすぐに探せます。`
    },
    {
      id: 3,
      imgUrl: "img/illust/about3.svg",
      title: "Webがアプリに",
      body: `PWAに対応しているので、ウェブサイトをホーム画面に追加できます。
      Webがアプリとして使えることをご体感ください。`
    },
    {
      id: 4,
      imgUrl: "img/illust/about4.svg",
      title: "クラウド同期",
      body: `スマートフォンからパソコンまで全ての端末で同じ情報にアクセスできます。`
    }
  ];
  nextCard() {
    if (this.currentId == this.aboutContents.length) this.$router.push("/");
    this.position = `transform: translateX(-${this.currentId * 100}%)`;
    this.currentId++;
  }
}
</script>

<style scoped>
.about_view {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  max-width: 550px;
}
.card_list {
  white-space: nowrap;
  width: 100%;
  transition: transform 0.5s;
}
</style>
