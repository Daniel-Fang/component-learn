export default {
    name: 'FyRender',
    functional: true,
    props: {
        render: Function
    },
    render (h, context) { // 函数式组件需要传入 context上下文
        return context.props.render(h);
    }
}