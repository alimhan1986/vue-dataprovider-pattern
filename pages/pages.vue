<template>
  <div v-if="!loading">
    <div v-for="item in data" :key="item.id" class="post">
      {{ item.id }}.
      <span style="font-weight: 500; font-size: 20px">{{ item.title }}</span
      >:
      {{ item.body }}
    </div>
  </div>
  <div v-else>Loading...</div>
  <div class="pages">
    <div
      v-for="page in 5"
      class="page"
      :style="page === options.page ? { backgroundColor: '#66BB6A' } : {}"
      :key="page"
      @click="options.page = page"
    >
      {{ page }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostsProvider } from "~/dataProviders/postsProvider";

const { options, loading, data } = new PostsProvider();
</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  justify-content: center;
  padding: 24px;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #388e3c;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 16px;
  cursor: pointer;
  background-color: #c8e6c9;
  color: #827717;
  &:hover {
    background-color: #a5d6a7;
  }
}

.post {
  border: 1px solid black;
  padding: 8px 12px;
  margin: 12px 8px;
}
</style>
