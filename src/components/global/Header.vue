<script setup>
import { ref } from 'vue'
import Dropdown from '../home/Dropdown.vue'
import Breadcrumb from './Breadcrumb.vue'
const isCollapse = ref(false)

//内部定义自定义事件
const emit = defineEmits(['collapseChange'])
function collapseChange() {
  isCollapse.value = !isCollapse.value

  //触发自定义事件
  emit('collapseChange', isCollapse.value)
}
</script>

<template>
  <div class="main">
    <div class="icon" @click="collapseChange">
      <el-icon size="24">
        <component :is="isCollapse ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="breadcrumb">
      <Breadcrumb> </Breadcrumb>
    </div>
    <div class="user-info">
      <span
        ><el-icon><Search /></el-icon
      ></span>
      <span
        ><el-icon><TurnOff /></el-icon
      ></span>
      <span
        ><el-icon><ChatDotRound /></el-icon
      ></span>
      <Dropdown />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex: 1 1 0;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}
.icon {
  padding-top: 4px;
}
.el-icon {
  cursor: pointer;
  color: #444;
}
.breadcrumb {
  flex: 1 1 0;
  padding-left: 24px;
}
.user-info {
  display: flex;
  gap: 24px;
  height: 100%;
  align-items: center;
}
.user-info span {
  padding-top: 4px;
}
.user-info .el-icon {
  font-size: 20px;
  cursor: pointer;
}
</style>
