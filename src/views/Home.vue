<template>
  <div class="home">
    This is home page
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
    },
    handleClick () {
      this.$router.push({
        name: 'compose'
      })
    }
  }
}
</script>
