<script setup>
import data from '../../assets/data.js'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { mapPathToMenus } from '../../utils/MapMenus.js'
const { menus } = data

//菜单折叠状态
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

//点击时触发路由切换
const router = useRouter()
function handleMenuClick(item) {
  router.push(item.url)
}

//路径匹配菜单
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenus(route.path, menus)
  return pathMenu.id + ''
})
</script>
<template>
  <el-menu :collapse="isCollapse" :default-active="defaultActive">
    <template v-for="item in menus" :key="item.id">
      <el-sub-menu class="sub-menu" :index="item.id + ''">
        <template #title>
          <el-icon>
            <component :is="item.icon.split('-')[2]" />
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <template v-for="subitem in item.children" :key="subitem.id">
          <el-menu-item :index="subitem.id + ''" @click="handleMenuClick(subitem)">{{
            subitem.name
          }}</el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped>
.el-menu {
  transition: 0s ease;
  border: none;
}
.el-menu:global(.el-menu--collapse) {
  width: 0px;
}

.el-sub-menu .el-menu-item.is-active {
  background-color: #333;
  color: #fff;
}
.el-sub-menu {
  --el-menu-hover-bg-color: #0001;
}
</style>
