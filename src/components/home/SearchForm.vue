<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  userName: '',
  realname: '',
  cellphone: '',
  enbale: 1,
  createTime: []
})
const formRef = ref()
const sizeRef = ref('default')
function handleResetClick() {
  formRef.value?.resetFields()
}
function handleQueryClick() {
  console.log('查询', form)
}
</script>
<template>
  <el-form :model="form" label-width="80px" ref="formRef">
    <el-row :gutter="24">
      <el-col :span="4"
        ><div class="grid-content">
          <el-form-item prop="userName">
            <el-input placeholder="请输入用户名" v-model="form.userName" :size="sizeRef" />
          </el-form-item></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content">
          <el-form-item prop="realname">
            <el-input placeholder="请输入真实姓名" v-model="form.realname" :size="sizeRef" />
          </el-form-item></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content">
          <el-form-item prop="cellphone">
            <el-input placeholder="请输入手机号码" v-model="form.cellphone" :size="sizeRef" />
          </el-form-item></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content">
          <el-form-item prop="enbale">
            <el-select placeholder="请选择状态" v-model="form.enbale" :size="sizeRef">
              <el-option label="启用" :value="1" />
              <el-option label="关闭" :value="0" />
            </el-select>
          </el-form-item></div
      ></el-col>
      <el-col :span="5"
        ><div class="grid-content">
          <el-form-item prop="createTime">
            <el-date-picker
              :size="sizeRef"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="form.createTime"
            />
          </el-form-item></div
      ></el-col>
      <el-col :span="3" class="btn">
        <el-button type="primary" :size="sizeRef" @click="handleQueryClick">查询</el-button>
        <el-button @click="handleResetClick" :size="sizeRef">重置</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
}
.el-form-item {
  align-items: center;
  margin-bottom: 24px;
}
.el-form-item :global(.el-form-item__content) {
  margin-left: 0 !important;
}
.el-form .btn {
  display: flex;
  justify-content: flex-end;
}
.el-select {
  flex: 1;
}
</style>
