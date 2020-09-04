import { mount } from '@vue/test-utils';
import FyInput from '@/components/input/index';

jest.useFakeTimers();

describe('FyInput.vue', () => {
  test('test v-model', async () => {
    const name = 'Alex';
    const onInput = jest.fn();
    const wrapper = shallowMount(FyInput, {
      propsData: {
        value: name
      },
      listeners: {
        input: onInput
      }
    });
    expect(wrapper.find('input[type="text"]').element.value).toBe(name);
    await wrapper.setValue('daniel');
    expect(onInput).toBeCalledTimes(1);
    expect(onInput).toBeCalledWith('daniel');
  })

  test('test input form validate', () => {
    
  })
})