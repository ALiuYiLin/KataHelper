<template>
  <div class="overview">
    <h1>总览</h1>
    <div>
      <span>平均kda</span>
      <span>2.16</span>
    </div>
    <div>
      <span>参团率</span>
      <span>54%</span>
    </div>
    <div>
      <span>伤害占比</span>
      <span>26%</span>
    </div>
    <div>
      <span>经济占比</span>
      <span>25%</span>
    </div>
    <div>
      <span>补刀占比</span>
      <span>25%</span>
    </div>
    <div>
      <span>胜负</span>
      <span>37胜55负</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  padding: 20px;
  background-color: rgba(#1e1e21, 1);
  color: rgba(#fff, 0.7);
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 16px;
    font-weight: 400;
    color: rgba(#fff, 0.8);
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
