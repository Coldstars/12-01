<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function handleLogoutClick() {
  router.push('/login')
}
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span>个人信息</span>
      <span class="icon">
        <el-icon class="el-icon--right"> <arrow-down /> </el-icon
      ></span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleLogoutClick">退出登录</el-dropdown-item>
        <el-dropdown-item divided>编辑信息</el-dropdown-item>
        <el-dropdown-item>切换角色</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-top: 4px;
}
</style>
