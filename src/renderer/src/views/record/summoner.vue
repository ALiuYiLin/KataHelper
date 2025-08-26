<template>
  <div class="summoner-info">
    <div class="profile">
      <img src="https://ddragon.leagueoflegends.com/cdn/15.16.1/img/profileicon/5799.png" />
      <span>157</span>
    </div>
    <div>
      <p>无敌LOL大王</p>
      <p>#23071</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summoner-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  .profile {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 5px;
    span {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 10px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:nth-child(2) {
    font-size: 14px;
  }
}
</style>
