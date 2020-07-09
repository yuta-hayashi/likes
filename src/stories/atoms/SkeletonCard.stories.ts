import SkeletonCard from "@/components/atoms/SkeletonCard.vue";

export default {
  component: SkeletonCard,
  title: "atoms/SkeletonCard"
};

export const Default = () => ({
  components: { SkeletonCard },
  template: `<SkeletonCard />`
});
