import { shallowMount } from "@vue/test-utils";
import AboutCard from "@/components/AboutCard.vue";

describe("AboutCard", () => {
  it("renders prop object.", () => {
    const content = {
      id: 1,
      imgUrl: "img/illust/about1.svg",
      title: "title",
      body: `this is body text.`
    };
    const wrapper = shallowMount(AboutCard, { propsData: { content } });
    expect(wrapper.find(".about_img").attributes().src).toBe(content.imgUrl);
    expect(wrapper.find(".about_title").text()).toBe(content.title);
    expect(wrapper.find(".about_title").text()).toBe(content.title);
    expect(wrapper.find(".about_body").text()).toBe(content.body);
  });
});
