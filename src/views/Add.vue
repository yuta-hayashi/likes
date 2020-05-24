<template>
  <div>
    <input type="text" placeholder="name" v-model="newName" />
    <button @click="add">OK</button>
    {{ newName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";

@Component
export default class AddPage extends Vue {
  newName = "";
  add() {
    itemsModule.addItem(this.newName, "imgUrl");
    this.$router.push("/");
  }
}
</script>
