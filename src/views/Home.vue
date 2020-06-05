<template>
  <div class="home">
    <div class="card_list">
      <div
        class="home_card"
        v-for="item in items"
        :key="item.id"
        @click="showMordal(item)"
      >
        <Card :imgUrl="item.imgUrl" :toBuy="item.toBuy" size="small" />
      </div>
      <router-link class="home_card" to="/add">
        <Card imgUrl="/plus.png" :toBuy="false" size="small"
      /></router-link>

      <transition name="modal">
        <div v-if="isMordal" id="overlay">
          <Modal id="mordal" @from-child="closeMordal" :item="currentItem" />
        </div>
      </transition>
      <InstallButton />
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import InstallButton from "@/components/InstallButton.vue";
import { itemsModule } from "@/store/item";
import { userModule } from "../store/user";
import Item from "@/models/Item";

@Component({
  components: {
    Card,
    Modal,
    InstallButton
  }
})
export default class Home extends Vue {
  isMordal = false;
  currentItem: Item = {
    id: 0,
    name: "",
    imgUrl: "",
    toBuy: false,
    createdAt: new Date()
  };
  mounted() {
    document.title = `Likes`;
  }
  items = itemsModule.items;
  created() {
    itemsModule.getFireStore();
  }
  showMordal(item: Item) {
    this.currentItem = item;
    this.isMordal = true;
  }
  closeMordal() {
    this.isMordal = false;
  }
}
</script>

<style scoped>
.home {
  margin: 0 auto;
  max-width: 550px;
  display: flex;
  justify-content: center;
}
.card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card_list:after {
  content: "";
  flex: auto;
}
.home_card {
  margin: 20px;
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
