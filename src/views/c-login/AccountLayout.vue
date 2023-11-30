<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const formRef = ref()
const router = useRouter()
const form = reactive({
  account: 'admin123',
  password: '123456'
})

//账号密码的校验规则
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,10}$/,

      message: '必须由6-10位数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{3,10}$/,
      message: '必须由3-10位数字或字母组成~',
      trigger: 'blur'
    }
  ]
})

//校验输入的账号密码格式是否正确
const activeAccountBtn = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      const name = form.account
      const password = form.password
      console.log(name, password)
      ElMessage({
        message: 'Congrats, 登录成功!',
        type: 'success'
      })
      router.push('/home')
    } else {
      ElMessage.error('Oops, 请输入正确的账号和密码~')
    }
  })
}

//把子组件函数暴露出去
defineExpose({
  activeAccountBtn
})
</script>

<template>
  <el-form :rules="rules" :model="form" ref="formRef">
    <el-form-item label="账号" size="large" prop="account">
      <el-input v-model="form.account" />
    </el-form-item>
    <el-form-item label="密码" size="large" prop="password">
      <el-input v-model="form.password" type="password" show-password />
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-form {
  padding: 12px 8px 20px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.el-form-item {
  margin-bottom: 0;
}
</style>
