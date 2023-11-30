<script setup>
import SearchForm from '../../../components/home/SearchForm.vue'
import ListContent from './c-list/ListContent.vue'
</script>
<template>
  <div class="userList">
    <div class="box1">
      <SearchForm></SearchForm>
    </div>
    <div class="box2">
      <ListContent></ListContent>
    </div>
  </div>
</template>

<style scoped>
.userList {
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.box1 {
  flex: 0 0 auto;
  background-color: #fff;
  padding: 24px 24px 0px 24px;
}
.box2 {
  background-color: #fff;
  flex: 1;
  padding: 24px 24px 4px 24px;
  border-radius: 4px;
  display: flex;
}
</style>
