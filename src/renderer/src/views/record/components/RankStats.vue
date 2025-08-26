<script lang="ts" setup>
</script>
<template>
  <div class="rank-stats">
    <img src="@renderer/assets/images/rank/Rank=Platinum.png">
    <p class="rank-type">单双排位</p>
    <div>
      <p>华贵铂金 II</p>
      <p>24胜24胜点</p>
      <p>最高 华贵铂金 II</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rank-stats {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 30px 50px;
  background-color: rgba(#1e1e21, 1);
  border-radius: 5px;
  img {
    width: 50px;
    height: 50px;
  }
  & > div > p:nth-child(1) {
    font-size: 16px;
  }
  .rank-type {
    position: absolute;
    left: 5px;
    top: 5px;
  }
}
</style>
