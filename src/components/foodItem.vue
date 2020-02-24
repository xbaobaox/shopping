<template>
  <div class="cont">
    <div class="head">
      <van-dropdown-menu active-color="#06c1ae">
        <van-dropdown-item
          v-model="value1"
          :options="option1"
          overlay="false"
        />
        <van-dropdown-item
          v-model="value2"
          :options="option2"
          overlay="false"
        />
        <van-dropdown-item
          v-model="value3"
          :options="option3"
          overlay="false"
        />
        <van-dropdown-item title="筛选" overlay="false">
          <van-switch-cell
            v-model="switch1"
            title="只看免预约"
            active-color="#06C1AE"
            inactive-color="#DDDDDD"
          />
          <van-switch-cell
            v-model="switch2"
            title="节假日可用"
            active-color="#06C1AE"
            inactive-color="#DDDDDD"
          />
          <div class="eatbox">
            <p class="eattime">用餐时段</p>
            <div class="flex">
              <button
                class="eatbtn"
                v-for="(item, index) of time"
                :key="index"
                @click="selectTime(index)"
                :class="{ selected: x == index }"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="serverbox">
            <p class="server">餐厅服务</p>
            <div class="flex">
              <button
                class="serverbtn"
                v-for="(item, index) of server"
                :key="index"
                @click="selectServer(index)"
                :class="{ selected: y == index }"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="numbox">
            <p class="num_of_people">餐厅服务</p>
            <div class="flex">
              <button
                class="nfpbtn"
                v-for="(item, index) of numOfPeople"
                :key="index"
                @click="ntfServer(index)"
                :class="{ selected: z == index }"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
        <div class="reset">
          <button class="reset_btn" @click='reset()'>重置</button> <button class="confirm_btn">完成</button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <ShopItem v-for="(item, index) of data" :key="index" :data="item" />
    <Logoin/>
  </div>
</template>

<script>
import ShopItem from '../components/ShopItem';
import Logoin from '../components/Login'
export default {
  name: "foodItem",
  components:{
    ShopItem,
    Logoin,
  },
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
      value1: 0,
      value2: "a",
      value3: 12,
      switch1: false,
      switch2: false,
      option1: [
        { text: "全部美食", value: 0 },
        { text: "其他美食", value: 1 },
        { text: "面包甜点", value: 3 },
        { text: "聚餐宴请", value: 4 },
        { text: "江浙菜", value: 5 },
        { text: "火锅", value: 6 },
        { text: "生日蛋糕", value: 7 },
        { text: "饮品店", value: 8 },
        { text: "特色菜", value: 9 },
        { text: "烧烤串", value: 10 },
        { text: "川湘菜", value: 11 }
      ],
      option2: [
        { text: "附近商家", value: "a" },
        { text: "全城", value: "b" },
        { text: "金安区", value: "c" },
        { text: "裕安区", value: "d" },
        { text: "霍邱县", value: "e" },
        { text: "舒城县", value: "f" },
        { text: "金寨区", value: "g" }
      ],
      option3: [
        { text: "智能排序", value: 12 },
        { text: "离我最近", value: 13 },
        { text: "好评优先", value: 14 },
        { text: "人气最高", value: 15 }
      ],
      time: [
        { name: "不限" },
        { name: "早餐" },
        { name: "午餐" },
        { name: "下午茶" },
        { name: "晚餐" },
        { name: "夜宵" }
      ],
      server: [
        { name: "不限" },
        { name: "买单" },
        { name: "在线点菜" },
        { name: "外卖送餐" },
        { name: "订座" },
        { name: "在线排队" }
      ],
      numOfPeople: [
        { name: "不限" },
        { name: "单人餐" },
        { name: "双人餐" },
        { name: "3~4人餐" },
        { name: "5~10人餐" },
        { name: "10人以上" }
      ],
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
          img:
            "//p0.meituan.net/200.0/deal/1f3644fc625b8564fb8e4d235f6809fc125908.jpg@182_0_730_730a%7C267h_267w_2e_90Q",
          title: "桥头排骨",
          desc: "[2店通用]小吃2选1，提供免费WiFi",
          price: "15.9元",
          locallyPrice: "18元",
          sells: "已售5324"
        },
        {
          img:
            "//p0.meituan.net/200.0/deal/64dbc0ad09aa8e7ac10ef16456b78f5f64495.jpg",
          title: "欢乐牧场时尚自助餐厅",
          desc: "[祥源广场]单人午餐自助",
          price: "47.9元",
          locallyPrice: "59元",
          sells: "已售65591"
        }
      ]
    };
  },
  methods: {
    selectTime(index) {
      this.x = index;
    },
    selectServer(index) {
      this.y = index;
    },
    ntfServer(index) {
      this.z = index;
    },
    reset(){
      this.x=0;
      this.y=0;
      this.z=0;
      this.switch1=false;
      this.switch2=false;
    }
  }
};
</script>

<style scoped>
.cont {
  height: 100vh;
  background-color: #fff;
}
.eatbtn,
.nfpbtn,
.serverbtn {
  font-size: 14px;
  color: #666;
  /* width: 95px; */
  border: none;
  background-color: #fff;
  border: 1px solid rgb(185, 185, 185);
  padding: 5px 20px;
  margin: 5px 5px;
  margin-left: 10px;
  border-radius: 3px;
}

.eatbox {
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.eattime,
.server {
  padding: 0 10px;
  font-weight: 300;
}

.selected {
  color: #06c1ae;
  border: 1px solid #06c1ae;
  background: #eafcfa;
}
.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* justify-content:flex-start */
}
.reset{
  display: flex;
  align-items: center;
  background-color: rgb(243,243,243);
  position: relative;
  padding: 10px 0;
}
.reset_btn,.confirm_btn{
  border:none;
  /* margin: 10px 0; */
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 14px;
}
.reset_btn{
  background-color: #fff;
  color:#666;
  border:1px solid rgb(214, 214, 214);
  margin-left: 15px;
}
.confirm_btn{
  background-color: #06c1ae;
  color:#fff;
  position: absolute;
  right: 15px;
}
</style>
