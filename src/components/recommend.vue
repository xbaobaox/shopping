<template>
  <div class="recom">
    <div class="header">[桥头排骨]相关推荐</div>
    <div class="recom_cont" v-for="(item, index) of data" :key="index">
      <div class="top">
        <i :class="item.class"></i>
        <p class="desc">{{ item.desc }}</p>
      </div>
      <div class="bott">
        <p class="price">{{ item.price }}<span class="yuan">元</span> </p>
        <p class="localprice">门市价:{{item.localprice}}元</p>
        <p class="sells">已售{{item.sells}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  data() {
    return {
      data: [
        {
          desc: "[2店通用]单人排骨套餐，提供免费WiFi",
          price: "19.9",
          localprice: "26",
          sells: "879",
          class: "tuan"
        },
        {
          desc: "[2店通用]20元代金券1张，可叠加",
          price: "16.8",
          localprice: "20",
          sells: "3438",
          class: "quan"
        },
        {
          desc: "[2店通用]双人套餐，提供免费WiFi",
          price: "42.9",
          localprice: "50",
          sells: "236",
          class: "tuan"
        },
        {
          desc: "[三里桥]招牌特色水果茶3选1，包间免费",
          price: "11.8",
          localprice: "14",
          sells: "138",
          class: "tuan"
        },
        {
          desc: "[万达广场]❤招牌大脸鸡排❤，建议单人使用",
          price: "9.6",
          localprice: "16",
          sells: "469",
          class: "tuan"
        },
        {
          desc: "[六安等]美味套餐A，建议1-2人使用",
          price: "10",
          localprice: "11",
          sells: "5",
          class: "tuan"
        }
      ]
    };
  }
};
</script>
<style scoped>
.tuan {
  display: inline-block;
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -181px -42px;
  width: 19px;
  height: 20px;
  transform: scale(.8)
}
.quan {
  display: inline-block;
  transform: scale(.8);
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -181px 0px;
  width: 19px;
  height: 20px;
}
.recom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  background-color: #fff;
}
.header {
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.recom_cont{
  margin-left: 10px;
}
.top {
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0;
  padding-bottom: 3px;
}
.bott{
  display: flex;
  align-items:flex-end;
  padding-left: 26px;
  padding-bottom: 10px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.desc {
  font-size: 14px;
  color: #666;
  padding-left: 5px;
}
.price{
  font-size: 18px;
  font-weight: bold;
  color:#06c1ae;
}
.yuan{
  font-size:14px;
  font-weight: normal;
}
.sells,.localprice{
  font-size: 12px;
  color:#666;
}
.sells{
  position: absolute;
  right: 15px;
  top: 0;
}
.localprice{
  padding-left: 6px;
}
</style>
