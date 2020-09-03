import { shallowMount } from '@vue/test-utils';
import FyCheckbox from '@/components/checkbox';

describe('checkbox', () => {

  it('test checkbox v-model binding', async () => {
    const fn = jest.fn();
    const wrapper = shallowMount(FyCheckbox, {
      propsData: {
        value: false
      },
      listeners: {
        input: fn
      }
    });
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false);
    await wrapper.find('input[type="checkbox"]').setChecked();
    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(true);
    
    await wrapper.find('input[type="checkbox"]').setChecked(false);
    expect(fn).toBeCalledTimes(2);
    expect(fn).toBeCalledWith(false);
  })
})