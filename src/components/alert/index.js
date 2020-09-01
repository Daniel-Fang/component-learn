import FyAlert from './src/alert.vue';

FyAlert.install = function (Vue) {
    Vue.component(FyAlert.name, FyAlert);
}

export default FyAlert;