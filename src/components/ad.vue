<template>
  <div class="ad">
    <div class="header">
      看了本团购的用户还看了
      <p class="gg">广告</p>
    </div>
    <div class="item" v-for="(item, index) of D" :key="index">
      <div class="box">
        <div class="box_left">
          <img :src="item.img" alt="" />
        </div>
        <div class="box_right">
          <div class="name">
            {{ item.name }}
            <span class="position">{{ item.position }}</span>
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
          <div class="price">
            ¥{{ item.price }}
            <span class="sells">已售{{ item.sells }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ad",
  data() {
    return {
      D: [
        {
          img: require("../images/8143e03693d4bc934b405e796f89495b152697.jpg"),
          name: "猪小妖烧烤武道汇总店",
          desc:
            "仅售388元！最高价值490元的猪小妖精品餐，建议10-14人使用，可免费使用包间，提供免费WiFi，提供免费停车位。",
          price: "388",
          position: "3.0km",
          sells: "0"
        },
        {
          img: require("../images/8143e03693d4bc934b405e796f89495b152697.jpg"),
          name: "神龙吊锅寨",
          desc:
            "[云路街] 仅售478元！价值586元的神龙，全家福套餐，建议10-12人使用，可免费使用包间，提供免费WiFi。",
          price: "478",
          position: "3.6km",
          sells: "588"
        },
        {
          img: require("../images/d1ef209878eb6b773d57446d6ab41c9836272.jpg"),
          name: "南洋大师傅",
          desc:
            "[万达广场] 仅售16.9元！价值19.9元的现烤•经典原味1份，提供免费WiFi。",
          price: "16.9",
          position: "4.5km",
          sells: "20"
        }
      ]
    };
  }
};
</script>
<style scoped>
.ad {
  background-color: #fff;
  margin-top: 10px;
}
.header {
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  padding-left: 0;
  margin-left: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header,
.gg {
  font-size: 18px;
  color: #999;
}
.gg {
  position: absolute;
  right: 15px;
}
.box {
  display: flex;
  align-items: center;
}
.box_left img {
  padding: 10px;
  width: 90px;
}
.name {
  font-size: 14px;
  padding-bottom: 5px;
}
.position {
  position: absolute;
  right: 15px;
  font-size: 12px;
  color: #999;
}
.box_right .desc {
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 35px;
  width: 200px;
}
/* .desc::after{
  display: inline;
  content:'...';
  font-size: 12px;
} */
.price {
  font-size: 12px;
  color: #666;
}
.price {
  font-size: 18px;
  font-weight: bold;
  color: #06c1ae;
  padding-top: 5px;
}
.sells {
  font-size: 12px;
  font-weight: normal;
  color: #999;
  position: absolute;
  right: 15px;
}
.box_right {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
}
</style>
