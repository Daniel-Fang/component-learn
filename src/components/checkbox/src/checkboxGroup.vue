<template>
  <div class="fy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '@/utils/assist.js';
import Emitter from '@/mixins/emitter.js';
export default {
  name: 'fy-checkbox-group',
  mixins: [ Emitter ],
  props: {
    value: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      children: []
    }
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'fy-checkbox'); // 获取所有的fy-checkbox 组件实例
      if (this.childrens.length) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;
          if (update) {
            child.group = true;
          }
        })
      }
    },
    onChange (data) {
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('fy-form-item', 'on-form-change', data);
    }
  }
}
</script>
