<template>
  <div>
    Like Page
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { itemsModule } from "@/store/item";
import Item from "@/models/Item";

@Component({
  components: {
    Card
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
</style>
