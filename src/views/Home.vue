<template>
  <div class="home">
    <router-link to="/add">ADD</router-link>
    <div class="card_list">
      <router-link v-for="item in items" :key="item.id" :to="'like/' + item.id">
        <Card :imgUrl="item.imgUrl" size="small" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { itemsModule } from "@/store/item";
import { userModule } from "../store/user";

@Component({
  components: { Card }
})
export default class Home extends Vue {
  items = itemsModule.items;
  created() {
    itemsModule.getFireStore();
  }
}
</script>

<style scoped>
.card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
