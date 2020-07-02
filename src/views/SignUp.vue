<template>
  <SignUpTemp />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpTemp from "@/components/templates/SignUpTemp.vue";

@Component({
  components: { SignUpTemp }
})
export default class SignUp extends Vue {}
</script>
