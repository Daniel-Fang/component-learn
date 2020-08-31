import FyCheckbox from './src/checkbox.vue';

FyCheckbox.install = function (Vue) {
  Vue.component(FyCheckbox.name, FyCheckbox);
}

export default FyCheckbox;