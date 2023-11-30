<script setup>
import LoginLayout from './c-login/LoginLayout.vue'
</script>

<template>
  <div class="main">
    <LoginLayout />
  </div>
</template>
<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}
</style>
