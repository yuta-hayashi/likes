import RadiusButton from "@/components/atoms/RadiusButton.vue";

export default {
  component: RadiusButton,
  title: "atoms/RadiusButton"
};

export const normal = () => ({
  components: { RadiusButton },
  template: "<RadiusButton>Button</RadiusButton>"
});

export const primary = () => ({
  components: { RadiusButton },
  template: "<RadiusButton color='primary'>Button</RadiusButton>"
});

export const secondary = () => ({
  components: { RadiusButton },
  template: "<RadiusButton color='secondary'>Button</RadiusButton>"
});

export const disabled = () => ({
  components: { RadiusButton },
  template: "<RadiusButton :disabled='true'>Button</RadiusButton>"
});
