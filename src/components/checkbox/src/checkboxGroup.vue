<template>
  <div class="fy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentDownward } from '@/utils/assist.js';
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
      this.childrens = findComponentDownward(this, 'fy-checkbox');
      if (this.childrens) {
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

<style>

</style>