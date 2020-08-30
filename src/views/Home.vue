<template>
  <div class="home">
    <!-- <i-form :model="formModel" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        
      </i-form-item>
      <i-form-item label="邮箱" prop="email">

      </i-form-item>
    </i-form> -->
  </div>
</template>

<script>
import iForm from '@/components/form/form.vue';
import iFormItem from '@/components/form/form-item.vue';
export default {
  name: 'Home',
  components: {
    iForm,
    iFormItem
  }
}
</script>
