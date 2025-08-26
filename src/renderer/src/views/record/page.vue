<script lang="ts" setup>
import { ref } from 'vue';

const pageNum = ref(1)
const page = {
  pageNext: (): void => {
    pageNum.value += 1
  },
  pagePre: (): void => {
    pageNum.value = pageNum.value === 1 ? 1 : pageNum.value - 1
  }
}
</script>

<template>
  <div class="page">
    <div>
      <input v-model="pageNum" type="text" />
      <button @click="page.pagePre()">上一页</button>
      <button @click="page.pageNext()">下一页</button>
      <select name="" >
        <option value="">20项</option>
      </select>
    </div>
    <div>
      <select name="" >
        <option value="">所有模式</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 20px;
  background-color: rgba(#1e1e21, 1);
  input {
    width: 40px;
  }

  input,
  select,
  option,
  button {
    height: 25px;
    padding: 0 10px;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > select {
      flex: 1;
    }
  }
  & > div:nth-child(2) > select {
    width: 100%;
  }
}
</style>
