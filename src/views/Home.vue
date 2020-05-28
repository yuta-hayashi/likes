<template>
  <div class="home">
    <div class="card_list">
      <router-link
        class="home_card"
        v-for="item in items"
        :key="item.id"
        :to="'like/' + item.id"
      >
        <Card :imgUrl="item.imgUrl" :toBuy="item.toBuy" size="small" />
      </router-link>
      <router-link class="home_card" to="/add">
        <Card imgUrl="/plus.png" :toBuy="false" size="small"
      /></router-link>
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
.home {
  margin: 0 auto;
}
.card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.home_card {
  margin: 20px;
}
</style>
