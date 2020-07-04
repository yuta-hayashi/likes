import { action } from "@storybook/addon-actions";

import MyButton from "../components/MyButton.vue";

export default {
  component: MyButton,
  title: "Button"
};

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">こんにちは Button</my-button>',
  methods: { action: action("clicked") }
});

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: "<my-button>😀 😎 👍 💯</my-button>"
});
