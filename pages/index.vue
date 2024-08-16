<template>
  <div class="main">
    <NuxtLink class="link" to="/pages">Pages pagination</NuxtLink>
    <NuxtLink class="link" to="/infinity">Infinity loading</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b0bec5;
}

.link {
  margin: 16px;
  padding: 6px 12px;
  background-color: #1565c0;
  color: white;
  border: 1px solid #0d47a1;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #42a5f5;
  }
}
</style>
