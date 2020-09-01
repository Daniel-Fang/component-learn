import FyRender from './src/render';

FyRender.install = function (Vue) {
    Vue.component(FyRender.name, FyRender);
}

export default FyRender;