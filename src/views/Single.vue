<template>
  <div class="single">
    <fy-input v-model="name" placeholder="请输入内容"></fy-input>
  </div>
</template>

<script>
import FyInput from '@/components/input';
import FyCheckbox from '@/components/checkbox';
export default {
  components: {
    FyInput,
    FyCheckbox
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>
