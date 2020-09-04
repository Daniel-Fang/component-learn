import { shallowMount } from '@vue/test-utils';
import FyForm from '@/components/form';

describe('test form', () => {
  it('test form', () => {
    const defaultSlot = 'default slot';
    const wrapper = shallowMount(FyForm, {
      propsData: {
        model: {
          name: ''
        },
        rules: {
          name: [{
            required: true,
            message: '姓名是必填项',
            trigger: 'blur'
          }]
        }
      },
      slots: {
        default: defaultSlot
      }
    });
    
    expect(wrapper.text()).toBe(defaultSlot);
    expect(wrapper.html()).toMatchSnapshot();
  })
})