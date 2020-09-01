<template>
    <div class="fy-alert">
        <div class="alert-main" v-for="item in notices" :key="item.name">
            <div class="alert-content">{{ item.content }}</div>
        </div>
    </div>
</template>

<script>
let seed = 0;
function getUuid () {
    return 'alert_' + (seed++);
}
export default {
    name: 'fy-alert',
    data () {
        return {
            notices: []
        }
    },
    methods: {
        add (notice) {
            const name = getUuid();
            let _notice = {name, ...notice};
            this.notices.push(_notice);
            const duration = notice.duration || 1.5;
            setTimeout(() => {
                this.remove(name);
            }, duration * 1000);
        },
        remove (name) {
            this.notices = this.notices.filter(notice => notice.name !== name);
        } 
    }
}
</script>

<style>
.fy-alert {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
}

.alert-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
}
</style>