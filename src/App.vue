<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
</script>

<template>
  <header>
    <img src="/images/fuji_speedway.svg" alt="" />
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 0 24px;
  min-width: 100%;
  /* padding: 19px 618.8px 19px 618px; */
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
}
header img{
  width: 163.2px;
  height: 24px;
  object-fit: contain;
}
</style>
