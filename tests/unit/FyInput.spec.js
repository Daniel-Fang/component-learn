import { shallowMount } from '@vue/test-utils';
import FyInput from '@/components/input/index';

describe('FyInput.vue', () => {
  it('it should support v-model binding', async () => {
    const name = 'Alex';
    const wrapper = shallowMount(FyInput, {
      propsData: {
        value: name
      }
    });
    expect(wrapper.find('input[type="text"]').element.value).toBe(name);
    await wrapper.trigger('input', {
      value: 'daniel'
    });
    expect(wrapper.find('input[type="text"]').element.value).toBe('daniel');
  })
})