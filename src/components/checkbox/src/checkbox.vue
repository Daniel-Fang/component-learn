<template>
  <label class="fy-checkbox">
    <span>
      <input 
        type="checkbox"
        :disabled="disabled"
        :checked="value"
        @change="onChange">
    </span>
    <slot></slot>
  </label>
</template>

<script>
import { findComponentUpward } from '@/utils/assist.js';
import Emitter from '@/mixins/emitter.js';
export default {
  name: 'fy-checkbox',
  mixins: [Emitter],
  props: {
    value: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean]
  },
  data () {
    return {
      model: [],
      group: false,
      parent: null
    }
  },
  methods: {
    onChange (e) {
      if (this.disabled) return false;
      const checked = e.target.checked;
      this.$emit('input', checked);
      // this.$emit('on-change', checked);
      // this.$emit('fy-form-item', 'on-form-change', checked);
    }
  },
  mounted () {
    // this.parent = findComponentUpward(this, 'fy-checkbox-group');
    // if (this.parent) {
    //   this.group = true;
    // }

    // if (this.group) {
    //   this.parent.updateModel(true);
    // } else {
    //   this.updateModel();
    // }
  }
}
</script>

<style>

</style>