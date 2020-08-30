<template>
  <div class="home">
    <fy-form :model="formModel" :rules="ruleValidate">
      <fy-form-item label="用户名" prop="name">
        
      </fy-form-item>
      <fy-form-item label="邮箱" prop="email">

      </fy-form-item>
    </fy-form>
  </div>
</template>

<script>
import FyInput from '@/components/input';
import FyForm from '@/components/form';
import FyFormItem from '@/components/form-item';
export default {
  name: 'Home',
  components: {
    FyInput,
    FyForm,
    FyFormItem
  },
  data () {
    return {
      name: 'alex'
    }
  },
  watch: {
    name (val) {
      console.log(val);
    }
  }
}
</script>
