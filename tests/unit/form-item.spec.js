import { shallowMount } from "@vue/test-utils";
import FyForm from "@/components/form";
import FyFormItem from "@/components/form-item";
import FyInput from "@/components/input";

describe("form-item", () => {
  it("mount form-item", async () => {
    const wrapper = shallowMount(FyFormItem, {
      parentComponent: FyForm,
      provide: {
        form() {
          return FyForm;
        }
      },
      propsData: {
        label: '姓名',
        prop: 'name'
      },
      slots: {
        default: FyInput
      }
    });

    expect(wrapper.vm.$parent.$options.name).toBe("fy-form"); 
    expect(wrapper.vm.form).toBeInstanceOf(Object);
    expect(wrapper.find("label")).toBeTruthy();
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="fy-form-item"><label class="">姓名</label>
        <div><input type="text" class="fy-input">
          <!---->
        </div>
      </div>
    `);

    await wrapper.setData({
      validateState: "error",
      validateMessage: "name 格式验证错误"
    });
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="fy-form-item"><label class="">姓名</label>
        <div><input type="text" class="fy-input">
          <div class="fy-form-item-message">name 格式验证错误</div>
        </div>
      </div>
    `);
  });
});
