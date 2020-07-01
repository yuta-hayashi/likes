<template>
  <div id="modal_content">
    <img class="back_button" src="../assets/ui/BackButton.svg" @click="close" />
    <button class="button button_delete right" @click="deleteItem">
      削除
    </button>
    <Card class="card_big" :imgUrl="item.imgUrl" size="big" />
    <span class="item_name">{{ item.name }}</span>
    <button
      class="button button_primary"
      v-if="item.toBuy"
      @click="changeToBuy"
    >
      買った
    </button>
    <button class="button button_secondary" v-else @click="changeToBuy">
      買う
    </button>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/atoms/Card.vue";
import Item from "@/models/Item";
import { itemsModule } from "@/store/item";

@Component({
  components: {
    Card
  }
})
export default class Modal extends Vue {
  @Prop() private item!: Item;
  close() {
    this.$emit("from-child");
  }
  changeToBuy() {
    itemsModule.changeToBuy({ id: this.item.id, toBuy: !this.item.toBuy });
  }
  deleteItem() {
    itemsModule.deleteItem(this.item.id);
    this.$emit("from-child");
  }

  @Watch("$route", { immediate: false, deep: true })
  onUrlChange(route: any) {
    if (route.hash === "") this.close();
  }
}
</script>

<style scoped>
.card_big {
  margin: 70px auto 20px auto;
}
.item_name {
  display: block;
  font-size: 24px;
  margin-bottom: 20px;
}

.button_delete {
  margin-top: 30px;
}
.back_button {
  position: absolute;
  left: 0;
  margin: 10px auto 0px 10px;
}
.right {
  position: absolute;
  right: 0;
  margin: 15px 10px 0px auto;
}
</style>
