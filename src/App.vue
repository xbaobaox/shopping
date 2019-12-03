<template>
  <div id="app">
    <HelloWorld />
    <div class="box">
      <div class="header">猜你喜欢</div>
      <ShopItem v-for="(item,index) of data" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ShopItem from "./components/ShopItem.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    ShopItem
  },
  data() {
    return {
      data: [
        {
          img:
            "//p0.meituan.net/200.0/deal/2cf3d382d1ce68ea7934fe3a51a8bb62129461.jpg",
          title: "华莱士",
          desc: "[新都会广场]超值套餐,建议担任使用",
          price: "45.9元",
          locallyPrice: "49元",
          sells: "已售13280"
        },

        {
          img:
            "//p0.meituan.net/200.0/deal/a0f23478cb314ee6a1f2ee93f772261f1053215.png@125_0_750_750a%7C267h_267w_2e_90Q",
          title: "食尚名肴自助涮烤",
          desc: "[红街]单人午晚通用券",
          price: "54.9元",
          locallyPrice: "59元",
          sells: "已售41900"
        },
        {
          img:
            "//p0.meituan.net/200.0/deal/d6beaeaaae8e396c61d6d15b90110c81108095.jpg@106_0_637_637a%7C267h_267w_2e_90Q",
          title: "曙光铂尊酒店",
          desc: "[金安区]海鲜自助，精品奢华。",
          price: "96元",
          locallyPrice: "128元",
          sells: "已售14967"
        },
        {
          img:
            "//p1.meituan.net/200.0/deal/74660f44d18fdce8f1822eccf6015b4524522.jpg@90_0_279_279a%7C267h_267w_2e_90q",
          title: "国足臭豆腐",
          desc: "[祥源广场]国足臭豆腐1份，提供免费WiFi",
          price: "7.9元",
          locallyPrice: "9元",
          sells: "已售8044"
        },
        {
          img:
            "//p0.meituan.net/200.0/dpdeal/3f1643060bafc63356edf127368d5b692853450.jpg",
          title: "汤清宫水汇",
          desc: "[金安区]单人成人门票",
          price: "49元",
          locallyPrice: "50元",
          sells: "已售5324"
        },
        {
          img:"//p0.meituan.net/200.0/deal/1f3644fc625b8564fb8e4d235f6809fc125908.jpg@182_0_730_730a%7C267h_267w_2e_90Q",
          title: "桥头排骨",
          desc: "[2店通用]小吃2选1，提供免费WiFi",
          price: "15.9元",
          locallyPrice: "18元",
          sells: "已售5324"
        },
        {
          img:"//p0.meituan.net/200.0/deal/64dbc0ad09aa8e7ac10ef16456b78f5f64495.jpg",
          title: "欢乐牧场时尚自助餐厅",
          desc: "[祥源广场]单人午餐自助",
          price: "47.9元",
          locallyPrice: "59元",
          sells: "已售65591"
        },
      ]
    };
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: rgb(240, 239, 237);
}
.header {
  margin-left: 0.625rem;
  padding: 0.625rem 0;
  color: #333;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1rem;
}
.box {
  background-color: #fff;
}
</style>
