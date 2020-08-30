<template>
  <input 
    class="fy-input" 
    type="text" 
    :value="value" 
    @input="handleInput" 
  />
</template>

<script>
export default {
  name: 'FyInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>