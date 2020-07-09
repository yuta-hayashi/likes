import SettingProfileInfo from "@/components/molecules/SettingProfileInfo.vue";

export default {
  component: SettingProfileInfo,
  title: "molecules/SettingProfileInfo"
};

export const Default = () => ({
  components: { SettingProfileInfo },
  template: `<SettingProfileInfo name='Name' email='email@yuta.run' />`
});
