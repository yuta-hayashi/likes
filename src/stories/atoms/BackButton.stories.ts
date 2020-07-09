import BackButton from "@/components/atoms/BackButton.vue";

export default {
  component: BackButton,
  title: "atoms/BackButton"
};

export const Default = () => ({
  components: { BackButton },
  template: `<BackButton />`
});
