<template>
  <div class="home">
    <transition name="message_bar">
      <MessageBar v-show="buyNum != ''"
        >買うものが{{ buyNum }}あります</MessageBar
      >
    </transition>
    <div v-if="isLoading" class="card_list">
      <SkeletonCard v-for="n in 3" :key="n" class="home_card" />
    </div>
    <div class="card_list">
      <div v-for="item in items" :key="item.id" @click="showMordal(item)">
        <Card :imgUrl="item.imgUrl" :toBuy="item.toBuy" size="small" />
      </div>
      <router-link class="home_card" to="/add">
        <Card imgUrl="/plus.png" :toBuy="false" size="small"
      /></router-link>

      <transition name="modal">
        <div v-if="isMordal" id="overlay" @click.self="closeMordal">
          <Modal id="mordal" @from-child="closeMordal" :item="currentItem" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/atoms/Card.vue";
import Modal from "@/components/Modal.vue";
import MessageBar from "@/components/MessageBar.vue";
import SkeletonCard from "@/components/SkeletonCard.vue";
import { itemsModule } from "@/store/item";
import { userModule } from "../store/user";
import Item from "@/models/Item";

@Component({
  components: {
    Card,
    Modal,
    MessageBar,
    SkeletonCard
  }
})
export default class Home extends Vue {
  isMordal = false;
  items = itemsModule.items;
  currentItem: Item = {
    id: 0,
    name: "",
    imgUrl: "",
    toBuy: false,
    createdAt: new Date()
  };
  get isLoading() {
    return itemsModule.isLoading;
  }
  get buyNum() {
    let toBuy = 0;
    itemsModule.items.forEach((item) => {
      if (item.toBuy) ++toBuy;
    });
    if (toBuy < 10 && toBuy > 0) {
      return toBuy.toString() + "つ";
    } else if (toBuy) {
      return toBuy.toString() + "個";
    }
    return "";
  }
  mounted() {
    document.title = `Likes`;
  }
  created() {
    itemsModule.getFireStore();
  }
  showMordal(item: Item) {
    this.currentItem = item;
    this.isMordal = true;
    this.$router.push({ hash: item.id.toString() });
  }
  closeMordal() {
    console.info("close modal");
    this.isMordal = false;
    if (this.$route.hash != "") this.$router.push("/");
  }
}
</script>

<style scoped>
.home {
  margin: 0 auto;
  max-width: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.card_list {
  display: grid;
  justify-items: center;
  column-gap: 1em;
  row-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin-top: 1em;
}
#overlay {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#mordal {
  z-index: 2;
  background: #fff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.message_bar-enter-active {
  animation: SlideDown 0.8s;
}
.message_bar-leave-active {
  animation: SlideUp 0.8s;
}

@keyframes SlideDown {
  0% {
    opacity: 0.2;
    height: 0px;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    height: 18px;
    transform: translateY(0px);
  }
}

@keyframes SlideUp {
  0% {
    opacity: 1;
    height: 18px;
    transform: translateY(0px);
  }
  100% {
    opacity: 0.2;
    height: 0px;
    transform: translateY(-20px);
  }
}

.modal-enter-active {
  animation: SlideIn 0.8s;
}
.modal-leave-active {
  animation: SlideOut 0.8s;
}

@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateY(400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes SlideOut {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(400px);
  }
}
</style>
