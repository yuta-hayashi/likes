<template>
  <div>
    <SignUpForm />
    <router-link to="/about">
      このアプリについて
    </router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import SignUpForm from "@/components/organisms/SignUpForm.vue";

@Component({
  components: {
    SignUpForm
  }
})
export default class SignUpTemp extends Vue {}
</script>
