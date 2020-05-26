<template>
  <div class="home">
    <router-link v-for="item in items" :key="item.id" :to="'like/' + item.id">{{
      item.name
    }}</router-link>
    <router-link to="/add">ADD</router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { itemsModule } from "@/store/item";
import { userModule } from "../store/user";

@Component
export default class Home extends Vue {
  items = itemsModule.items;
  created() {
    itemsModule.getFireStore();
  }
}
</script>
