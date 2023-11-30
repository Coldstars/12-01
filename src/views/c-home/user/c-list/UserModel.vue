<script setup>
import { reactive, ref } from 'vue'
import { addUser, editUser } from '@/utils/UserControl.js'
const centerDialogVisible = ref(false)
const isAddRef = ref(true)
const form = reactive({
  userName: '',
  realname: '',
  password: '',
  cellphone: '',
  role: '',
  apartment: '',
  id: ''
})

//把显示对话框的方法提取出来
function dialogVisible() {
  centerDialogVisible.value = true
}
defineExpose({
  dialogVisible,
  form,
  isAddRef
})

//新增用户数据
const emit = defineEmits(['btnAddUser'])
function handleBtnAddUser() {
  centerDialogVisible.value = false
  if (isAddRef.value) {
    addUser(form)
  } else {
    editUser(form)
    isAddRef.value = true
  }
  emit('btnAddUser')
  for (const key in form) {
    form[key] = ''
  }
}
function handleBtnCanceAdd() {
  centerDialogVisible.value = false
  for (const key in form) {
    form[key] = ''
  }
}
</script>

<template>
  <div class="user-model">
    <el-dialog v-model="centerDialogVisible" title="新增用户" width="30%" align-center>
      <el-form label-width="80px" :model="form">
        <el-form-item label="用户名" prop="userName">
          <el-input placeholder="请输入用户名" size="default" v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input placeholder="请输入真实姓名" size="default" v-model="form.realname"></el-input>
        </el-form-item>
        <el-form-item v-if="isAddRef" label="密码" prop="password">
          <el-input placeholder="请输入密码" size="default" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="cellphone">
          <el-input placeholder="请输入电话号码" size="default" v-model="form.cellphone"></el-input>
        </el-form-item>
        <el-form-item label="选择角色" prop="role">
          <el-select placeholder="请选择角色" v-model="form.role">
            <el-option label="男" value="male"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select placeholder="请选择部门" v-model="form.apartment">
            <el-option label="男" value="male"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleBtnCanceAdd">取消</el-button>
          <el-button type="primary" @click="handleBtnAddUser"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
