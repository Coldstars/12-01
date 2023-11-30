<script setup>
import data from '../../assets/data.js'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { mapPathToBreadcrumbs } from '../../utils/MapMenus.js'
const { menus } = data
const route = useRoute()
const breadcrumbs = computed(() => mapPathToBreadcrumbs(route.path, menus))
</script>

<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped></style>
