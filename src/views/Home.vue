<template>
  <div class="home">
    state:{{ items }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { itemsModule } from "@/store/item";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  items = itemsModule.items;
}
</script>
