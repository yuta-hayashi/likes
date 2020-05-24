<template>
  <div>
    Like Page
    {{ itemId }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";

@Component
export default class LikePage extends Vue {
  itemId = 0;
  created() {
    this.itemId = Number(this.$route.params.id);
  }
}
</script>
