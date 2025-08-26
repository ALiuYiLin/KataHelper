<template>
  <div class="champion-used">
    <table>
      <thead>
        <tr>
          <th>S2025</th>
          <th>单双</th>
          <th>灵活</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 5" :key="'i' + i">
          <td>
            <div class="champion-used-left">
              <img src="https://ddragon.leagueoflegends.com/cdn/15.16.1/img/champion/Aatrox.png" />
              <div>
                <p>Aatrox</p>
                <p>战斗评分 180</p>
              </div>
            </div>
          </td>
          <td>
            <div class="champion-used-center">
              <p>3.15:1 KDA</p>
              <p>8.9 / 4.6 / 5.4</p>
            </div>
          </td>
          <td>
            <div>
              <p>59%</p>
              <p>24场</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.champion-used {
  padding: 20px;
  background-color: rgba(#1e1e21, 1);
  font-size: 12px;
  color: rgba(#fff, 0.7);

  img {
    width: 50px;
    height: 50px;
  }
  table {
    width: 100%;
    gap: 10px;
  }
  th,
  td {
    text-align: left;
  }
  td {
    padding: 5px 0;
    position: relative;
  }
  .champion-used-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  .champion-used-center {
    & > p:nth-child(1) {
      font-size: 14px;
    }
  }

  p + p {
    margin-top: 0px;
  }
}
</style>
