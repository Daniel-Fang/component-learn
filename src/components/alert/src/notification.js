import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = (properties = {}) => {
    const props = properties;
    const AlertComponent = Vue.extend({
        data () {
            return {
                props
            }
        },
        render (h) {
            return h(Alert, {
                props
            })
        }
    })
    const instance = new AlertComponent();
    const component = instance.$mount();
    document.body.appendChild(component.$el);
    const alert = instance.$children[0];
    return {
        add (noticeProps) {
            alert.add(noticeProps);
        },
        remove (name) {
            alert.remove(name);
        }
    }
}

export default Alert;