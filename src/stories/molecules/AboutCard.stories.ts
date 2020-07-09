import AboutCard from "@/components/molecules/AboutCard.vue";

export default {
  component: AboutCard,
  title: "molecules/AboutCard"
};

export const Default = () => ({
  data() {
    return {
      dummy: {
        imgUrl: "logo.png",
        title: "title text",
        body: "This is body text.This is body text."
      }
    };
  },
  components: { AboutCard },
  template: `<AboutCard :content='dummy' />`
});
