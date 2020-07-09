import AboutLocation from "@/components/atoms/AboutLocation.vue";

export default {
  component: AboutLocation,
  title: "atoms/AboutLocation"
};

export const small = () => ({
  components: { AboutLocation },
  template: "<AboutLocation :currentId='1' :length='4'/>"
});
