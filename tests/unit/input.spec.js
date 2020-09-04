import { mount } from '@vue/test-utils';
import FyInput from '@/components/input/index';

jest.useFakeTimers();

describe('FyInput.vue', () => {
  it('it should support v-model binding', async () => {
    const name = 'Alex';
    const handleInput = jest.fn((value) => {
      console.log(value)
    });
    const wrapper = mount(FyInput, {
      propsData: {
        value: name
      },
      listeners: {
        input: handleInput
      }
    });
    expect(wrapper.vm.value).toBe(name);

    wrapper.find('input').element.value = 'daniel';
    await wrapper.trigger('input');
  })
})