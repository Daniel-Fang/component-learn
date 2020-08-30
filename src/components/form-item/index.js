import FyFormItem from '@/components/form/src/form-item.vue';

FyFormItem.install = function (Vue) {
  Vue.component(FyFormItem.name, FyFormItem);
}

export default FyFormItem;