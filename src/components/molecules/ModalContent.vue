<template>
  <div id="modal_content">
    <BackButton class="back_button" @push="close" />
    <RadiusButton class="right" @push="deleteItem">
      削除
    </RadiusButton>
    <Card class="card_big" :imgUrl="item.imgUrl" size="big" />
    <span class="item_name">{{ item.name }}</span>
    <RadiusButton color="primary" v-if="item.toBuy" @push="changeToBuy">
      買った
    </RadiusButton>
    <RadiusButton color="secondary" v-else @push="changeToBuy">
      買う
    </RadiusButton>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/atoms/Card.vue";
import RadiusButton from "@/components/atoms/RadiusButton.vue";
import BackButton from "@/components/atoms/BackButton.vue";

@Component({
  components: {
    Card,
    RadiusButton,
    BackButton
  }
})
export default class ModalContent extends Vue {
  @Prop() item!: object;

  changeToBuy() {
    this.$emit("change-to-buy");
  }

  deleteItem() {
    this.$emit("delete-item");
  }

  close() {
    this.$emit("close");
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
