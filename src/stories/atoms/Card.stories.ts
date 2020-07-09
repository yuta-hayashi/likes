import Card from "@/components/atoms/Card.vue";

export default {
  component: Card,
  title: "atoms/Card"
};

export const small = () => ({
  components: { Card },
  template:
    "<Card imgUrl='https://via.placeholder.com/150' size='small'></Card>"
});

export const big = () => ({
  components: { Card },
  template: "<Card imgUrl='https://via.placeholder.com/270' size='big'></Card>"
});

export const toBuy = () => ({
  components: { Card },
  template:
    "<Card imgUrl='https://via.placeholder.com/150' size='small' :toBuy='true'></Card>"
});
