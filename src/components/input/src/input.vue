<template>
  <input 
    class="fy-input" 
    type="text" 
    :value="value" 
    :placeholder="placeholder"
    @input="handleInput" 
    @blur="handleBlur"
  />
</template>

<script>
import Emitter from '@/mixins/emitter.js';
export default {
  name: 'fy-input',
  mixins: [ Emitter ],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: String
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value);
      this.dispatch('fy-form-item', 'on-form-change', e.target.value);
    },
    handleBlur (e) {
      this.dispatch('fy-form-item', 'on-form-blur', e.target.value)
    }
  }
}
</script>