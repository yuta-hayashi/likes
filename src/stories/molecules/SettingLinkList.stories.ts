import SettingLinkList from "@/components/molecules/SettingLinkList.vue";

export default {
  component: SettingLinkList,
  title: "molecules/SettingLinkList"
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
  components: { SettingLinkList },
  template: `<SettingLinkList />`
});
