import Notification from './notification';

let messageInstance;

function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance(); // 实例不存在，则创建；否则，直接返回
    return messageInstance;
}

function notice ({ duration = 1.5, content = '' }) {
    let instance = getMessageInstance();
    instance.add({
        content,
        duration
    });
}

export default {
    info (options) {
        return notice(options); // 此处可以根据options.type 显示不同的type的提示
    },
    success (options) {
        return notice(options);
    }
}