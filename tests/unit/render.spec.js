import { shallowMount } from "@vue/test-utils";
import Render from "@/components/render";

describe("render", () => {
  it("pass a render prop", () => {
    const wrapper = shallowMount(Render, {
      propsData: {
        render: h => {
          return h("div", { class: "container" }, "content");
        }
      }
    });

    expect(wrapper.html()).toMatchInlineSnapshot(
      `<div class="container">content</div>`
    );
  });
});
