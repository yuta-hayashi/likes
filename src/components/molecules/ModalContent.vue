<template>
  <div id="modal_content">
    <BackButton class="back_button" @push="close" />
    <RadiusButton class="right" @push="deleteItem">
      削除
    </RadiusButton>
    <Card class="card_big" :imgUrl="item.imgUrl" size="big" />
    <div v-if="isEdit">
      <TextInput
        style="margin:0 10px 0 0;"
        placeholder="Item Name"
        :value="item.name"
        @input="newName = $event"
      />
      <RadiusButton @push="updateName">上書き</RadiusButton>
    </div>
    <div v-else @click="isEdit = true">
      <span class="item_name"
        >{{ item.name }} <img class="edit_button" src="../../assets/ui/Edit.svg"
      /></span>
    </div>

    <RadiusButton color="primary" v-if="item.toBuy" @push="changeToBuy">
      買った
    </RadiusButton>
    <RadiusButton color="secondary" v-else @push="changeToBuy">
      買う
    </RadiusButton>
    <div class="buy_historys">
      <p>購入履歴</p>
      <BuyHistory :historys="item.history" />
    </div>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";
import Item from "@/models/Item";
import Card from "@/components/atoms/Card.vue";
import RadiusButton from "@/components/atoms/RadiusButton.vue";
import BackButton from "@/components/atoms/BackButton.vue";
import TextInput from "@/components/atoms/TextInput.vue";
import BuyHistory from "@/components/atoms/BuyHistory.vue";

@Component({
  components: {
    Card,
    RadiusButton,
    BackButton,
    TextInput,
    BuyHistory
  }
})
export default class ModalContent extends Vue {
  @Prop() item!: Item;
  isEdit = false;
  newName = "";

  changeToBuy() {
    this.$emit("change-to-buy");
  }

  deleteItem() {
    this.$emit("delete-item");
  }

  close() {
    this.$emit("close");
  }

  updateName() {
    itemsModule.changeName({ id: this.item.id, name: this.newName });
    this.isEdit = false;
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
.edit_button {
  margin-bottom: -0.1em;
}
.buy_historys {
  max-height: 8em;
  overflow: scroll;
}
</style>
