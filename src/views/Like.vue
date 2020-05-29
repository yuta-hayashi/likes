<template>
  <div>
    Like Page
    <BackButton />
    <Card class="card_big" :imgUrl="itemObj.imgUrl" size="big" />
    <span class="item_name">{{ itemObj.name }}</span>
    <button
      class="button button_primary"
      v-if="itemObj.toBuy"
      @click="changeToBuy"
    >
      買った
    </button>
    <button class="button button_secondary" v-else @click="changeToBuy">
      買う
    </button>
    <br />
    <button class="button button_delete" @click="deleteItem">
      削除
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { itemsModule } from "@/store/item";
import Item from "@/models/Item";
import BackButton from "@/components/BackButton.vue";

@Component({
  components: {
    Card,
    BackButton
  }
})
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
  deleteItem() {
    itemsModule.deleteItem(this.itemId);
    this.$router.push("/");
  }
}
</script>

<style scoped>
.card_big {
  margin: 20px auto;
}
.item_name {
  display: block;
  font-size: 24px;
  margin-bottom: 50px;
}

.button_delete {
  margin-top: 30px;
}
</style>
