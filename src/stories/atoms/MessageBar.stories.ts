import MessageBar from "@/components/atoms/MessageBar.vue";

export default {
  component: MessageBar,
  title: "atoms/MessageBar"
};

export const Default = () => ({
  components: { MessageBar },
  template: `<MessageBar>Message Bar</MessageBar>`
});
