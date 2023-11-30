<script setup>
import { ref } from 'vue'
import Aside from '../components/global/Aside.vue'
import Header from '../components/global/Header.vue'
const isCollapse = ref(false)
function CollapseChange(value) {
  isCollapse.value = value
}
</script>

<template>
  <el-container class="container">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <div class="title">
        <el-icon size="26" color="#444"><HomeFilled /></el-icon>
        <h1 v-show="!isCollapse">起源管理系统</h1>
      </div>
      <div class="c-aside">
        <Aside :is-collapse="isCollapse"></Aside>
      </div>
    </el-aside>
    <el-container class="c-container">
      <el-header>
        <Header @collapse-change="CollapseChange"></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  min-width: 1536px;
}

.el-header {
  height: 64px;
  display: flex;
  padding: 0;
  background-color: #fff;
}
.el-aside {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.c-aside {
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  transition: 0.2s ease;
}
.title {
  flex-shrink: 0;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0.01);
  border: 1px solid rgba(0, 0, 0, 0.03);
}
.title .el-icon {
  margin-bottom: 2px;
}
.el-aside h1 {
  font-weight: 700;
  font-size: 18px;
  padding-left: 8px;
  white-space: nowrap;
}
.c-aside::-webkit-scrollbar {
  display: none;
}
.el-main {
  padding: 28px;
  background-color: #f7f9fc;
}
</style>
