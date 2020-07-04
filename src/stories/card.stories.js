import { action } from "@storybook/addon-actions";

import Card from "../components/atoms/Card.vue";

export default {
  component: Card,
  title: "Card"
};

export const small = () => ({
  components: { Card },
  template:
    "<Card imgUrl='https://via.placeholder.com/150' size='small'></Card>",
  methods: { action: action("clicked") }
});

export const big = () => ({
  components: { Card },
  template: "<Card size='big'></Card>"
});
