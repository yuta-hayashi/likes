import ModalContent from "@/components/molecules/ModalContent.vue";

export default {
  component: ModalContent,
  title: "molecules/ModalContent"
};

export const Default = () => ({
  data() {
    return {
      dummy: {
        imgUrl: "https://via.placeholder.com/270",
        title: "title text",
        body: "This is body text.This is body text."
      }
    };
  },
  components: { ModalContent },
  template: `<ModalContent :item='dummy' />`
});
