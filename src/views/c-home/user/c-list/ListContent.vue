<script setup>
import data from '@/assets/data.js'
import Pagination from './Pagination.vue'
import formatUTC from '@/utils/Format.js'
import UserModel from './UserModel.vue'
import { computed, ref, watchEffect } from 'vue'
import { fetch, save } from '../../../../utils/UserStorage'
// const { userList } = data
const userLists = ref(fetch())
// 接收子组件对'对话框'操作的方法
const modelRef = ref()
function handleBtnNewUser(isAdd, userForm) {
  modelRef.value.dialogVisible()
  if (!isAdd) {
    modelRef.value.isAddRef = false
    console.log(modelRef.value.isAddRef)

    for (const key in modelRef.value.form) {
      modelRef.value.form[key] = userForm[key]
    }
  }
}

//新增用户时刷新列表
function btnAddUser() {
  userLists.value = fetch()
}
//删除用户
function handleBtnDelete(id) {
  for (let i = 0; i < userLists.value.length; i++) {
    if (userLists.value[i].id === id) {
      userLists.value.splice(i, 1)
    }
  }
  save(userLists.value)
}
</script>

<template>
  <div class="list-content">
    <div class="c-list-content">
      <div class="header">
        <div class="title">
          <el-icon size="20"><Star /></el-icon>
          <h1>用户列表</h1>
        </div>
        <div class="btn">
          <el-button type="primary" @click="handleBtnNewUser(true)">新增用户</el-button>
        </div>
      </div>
      <el-table
        :data="userLists"
        :header-cell-style="{ 'background-color': '#fafbfc', border: 'none', height: '60px' }"
        :row-style="{ height: '56px' }"
      >
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column prop="userName" label="用户名" width="120" />
        <el-table-column prop="realname" label="真实姓名" />
        <el-table-column prop="cellphone" label="电话" />
        <el-table-column prop="enable" label="状态">
          <template #default="scope">
            <el-button
              :type="scope.row.enable ? 'primary' : 'danger'"
              plain
              size="small"
              style="padding: 0 8px"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template #default="scope">
            <el-button
              size="small"
              text
              icon="Edit"
              type="primary"
              @click="handleBtnNewUser(false, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              text
              icon="Delete"
              type="danger"
              @click="handleBtnDelete(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <Pagination></Pagination>
      </div>
      <UserModel ref="modelRef" @btn-add-user="btnAddUser"></UserModel>
    </div>
  </div>
</template>

<style scoped>
.list-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}
.c-list-content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header .title {
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 8px;
}
.header .title h1 {
  font-size: 20px;
  font-weight: bold;
}
.header .title .el-icon {
  height: 100%;
  padding-top: 4px;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.header .el-button {
  padding: 0 12px;
}
.el-table {
  flex: 1;
}
.pagination {
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
}
.el-table-column {
  height: 80px;
}
.el-button {
  padding: 0;
}
</style>
