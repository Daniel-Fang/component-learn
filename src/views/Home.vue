<template>
  <div class="home">
    <fy-form :model="formModel" :rules="ruleValidate" ref="formRef">
      <fy-form-item label="用户名" prop="name">
        <fy-input v-model="formModel.name" placeholder="请输入用户名"></fy-input>
      </fy-form-item>
      <fy-form-item label="邮箱" prop="email">
        <fy-input v-model="formModel.email" placeholder="请输入邮箱"></fy-input>
      </fy-form-item>
      <!-- <fy-form-item label="性别" prop="sex">
        <fy-checkbox v-model="formModel.sex">男</fy-checkbox>
      </fy-form-item> -->
      <fy-form-item label="水果" prop="fruit">
        <fy-checkbox-group v-model="formModel.fruit">
          <fy-checkbox label="apple">苹果</fy-checkbox>
          <fy-checkbox label="orange">橘子</fy-checkbox>
        </fy-checkbox-group>
      </fy-form-item>
      <fy-form-item>
        <button @click="handleSubmit">提交</button>
        <button @click="handleReset">重置</button>
      </fy-form-item>
    </fy-form>
  </div>
</template>

<script>
import FyForm from '@/components/form';
import FyFormItem from '@/components/form-item';
import FyInput from '@/components/input';
import FyCheckboxGroup from '@/components/checkbox-group';
import FyCheckbox from '@/components/checkbox';
export default {
  name: 'Home',
  components: {
    FyForm,
    FyFormItem,
    FyInput,
    FyCheckboxGroup,
    FyCheckbox,
  },
  data () {
    return {
      formModel: {
        name: '',
        email: '',
        sex: false,
        fruit: ['apple']
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '邮箱格式不正确',
            trigger: ['change', 'blur']
          }
        ],
        sex: [
          {
            required: true,
            message: '性别不能为空',
            trigger: 'blur'
          }
        ],
        fruit: [
          {
            required: true,
            message: '水果必选',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    fruit (val) {
      console.log(val);
    } 
  },
  methods: {
    handleSubmit () {
      this.$Alert.info({
        content: '这是一条提示信息',
        duration: 2
      })
    },
    handleReset () {
      this.$refs.formRef.resetFields();
    }
  }
}
</script>
