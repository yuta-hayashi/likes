<template>
  <div>
    Like Page
    <img :src="itemObj.imgUrl" />
    {{ itemObj.toBuy }}
    <button v-if="itemObj.toBuy" @click="changeToBuy">買った</button>
    <button v-else @click="changeToBuy">買う</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";
import Item from "@/models/Item";

@Component
export default class LikePage extends Vue {
  itemId = 0;
  created() {
    this.itemId = Number(this.$route.params.id);
  }
  get itemObj(): Item {
    const item: Item = itemsModule.items.filter((item) => {
      return item.id === this.itemId;
    })[0];
    if (item == undefined) this.$router.push("/");
    return item;
  }
  changeToBuy() {
    itemsModule.changeToBuy(this.itemId);
  }
}
</script>
