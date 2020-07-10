import TextInput from "@/components/atoms/TextInput.vue";

export default {
  component: TextInput,
  title: "atoms/TextInput"
};

export const Default = () => ({
  components: { TextInput },
  template: `<TextInput placeholder='placeholder' />`
});

export const Value = () => ({
  components: { TextInput },
  template: `<TextInput placeholder='placeholder' value='has value' />`
});
