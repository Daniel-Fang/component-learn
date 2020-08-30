import FyForm from './src/form.vue';

FyForm.install = function (Vue) {
  Vue.component(FyForm.name, FyForm);
}

export default FyForm;