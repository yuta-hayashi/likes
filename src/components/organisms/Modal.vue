<template>
  <ModalContent
    :item="item"
    @change-to-buy="changeToBuy"
    @close="close"
    @delete-item="deleteItem"
  />
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import ModalContent from "@/components/molecules/ModalContent.vue";
import Item from "@/models/Item";
import { itemsModule } from "@/store/item";

@Component({
  components: {
    ModalContent
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
