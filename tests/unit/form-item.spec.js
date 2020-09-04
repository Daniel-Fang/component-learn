import { shallowMount } from '@vue/test-utils';
import FyForm from '@/components/form';
import FyFormItem from '@/components/form-item';

describe('form-item', () => {
  it('mount form-item', () => {
    const wrapper = shallowMount(FyFormItem, {
      parentComponent: FyForm,
      provide: {
        form () {
          return FyForm
        }
      },
      propsData: {
        label: '姓名',
        prop: 'label'
      }
    })

    expect(wrapper.vm.$parent.$options.name).toBe('fy-form');
    expect(wrapper.vm.form).toBeInstanceOf(Object);
    // expect(wrapper.html()).toMatchSnapshot();
  })
})