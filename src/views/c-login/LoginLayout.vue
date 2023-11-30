<script setup>
import { ref } from 'vue'
import AccountLayout from './AccountLayout.vue'
const remPwdRef = ref(true)
const activeNameRef = ref('account')
const accountRef = ref()
function handleLoginBtn() {
  if (activeNameRef.value === 'account') {
    accountRef.value.activeAccountBtn()
  } else {
    console.log('iphone')
  }
}
</script>

<template>
  <div class="main">
    <h1>后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeNameRef">
        <el-tab-pane name="account">
          <template #label>
            <div class="lable">
              <el-icon :size="16"><Discount /></el-icon>
              <span>账号登录</span>
            </div>
          </template>
          <AccountLayout ref="accountRef"> </AccountLayout>
        </el-tab-pane>
        <el-tab-pane name="iphone">
          <template #label>
            <div class="lable">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </div>
          </template>
          User</el-tab-pane
        >
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="remPwdRef" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="btn" @click="handleLoginBtn">
      <el-button type="primary" size="large">登录</el-button>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
}
.tabs {
  width: 100%;
}
.tabs .el-tabs {
  --el-tabs-header-height: 44px;
}
.tabs .lable {
  display: flex;
  align-items: center;
}
.tabs .lable .el-icon {
  margin-right: 4px;
  height: 100%;
  padding-bottom: 1px;
}
.controls {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 4px 0 20px 0;
}
.btn {
  width: 100%;
}
.btn .el-button {
  width: 100%;
}
</style>
