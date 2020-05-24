<template>
  <div>
    Like Page
    <img :src="itemObj.imgUrl" />
    {{ itemId }}
    {{ itemObj }}
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
    return item;
  }
}
</script>
