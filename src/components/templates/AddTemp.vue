<template>
  <div>
    <BackButton @push="$router.push('/')" />
    <AddForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BackButton from "@/components/atoms/BackButton.vue";
import AddForm from "@/components/organisms/AddForm.vue";

@Component({
  components: {
    BackButton,
    AddForm
  }
})
export default class AddPage extends Vue {
  mounted() {
    document.title = `Like - Add`;
  }
}
</script>
