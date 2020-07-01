<template>
  <AddTemp />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddTemp from "@/components/templates/AddTemp.vue";

@Component({
  components: {
    AddTemp
  }
})
export default class AddPage extends Vue {}
</script>
