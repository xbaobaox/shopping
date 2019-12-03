<template>
 <div class="subject">
    <div class="search">
      <div class="city"><span>杭州</span></div>
        <a href="#">
          <img src="../assets/放大镜.png" alt="" class="search_icon">
          请输入商家名、品类或者商圈...</a>
          <img src="../assets/man.png" alt="" class="man">
    </div>
    <div class="ad">
      <div class="left">
        <img src="../assets/7264ce9c25de2e464e3acd996fe8ad362803.png" alt="">
        <div class="left_cont">
          <p class="p_top">省钱利器 购物超划算</p>
          <p class="p_bott">吃喝玩乐尽在美团</p>
        </div>
      </div>
      <div class="right">
        <a href="#">去APP</a>
      </div>
    </div>
    <ul class="page">
      <li v-for="(item,index) of menu" :key="index" class="li">
        <div class="content">
          <div class="icon" :style="item.color">
            <img :src="item.icon" class="icon_image" />
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    name: String
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          icon: require("../assets/美食.png"),
          title: "美食",
          color: "background:rgb(253,157,33)"
        },
        {
          id: 2,
          icon: require("../assets/猫眼电影.png"),
          title: "猫眼电影",
          color: "background:rgb(255,103,103)"
        },
        {
          id: 3,
          icon: require("../assets/酒店.png"),
          title: "酒店",
          color: "background:rgb(138,144,250)"
        },
        {
          id: 4,
          icon: require("../assets/休闲娱乐.png"),
          title: "休闲娱乐",
          color: "background:rgb(255,207,82)"
        },
        {
          id: 5,
          icon: require("../assets/外卖.png"),
          title: "外卖",
          color: "background:rgb(253,157,33)"
        },
        {
          id: 6,
          icon: require("../assets/ktv.png"),
          title: "KTV",
          color: "background:rgb(255,207,82)"
        },
        {
          id: 7,
          icon: require("../assets/周边游.png"),
          title: "周边游",
          color: "background:rgb(77,198,238)"
        },
        {
          id: 8,
          icon: require("../assets/丽人.png"),
          title: "丽人",
          color: "background:rgb(255,128,194)"
        },
        {
          id: 9,
          icon: require("../assets/小吃快餐.png"),
          title: "小吃快餐",
          color: "background:rgb(255,156,62)"
        },
        {
          id: 10,
          icon: require("../assets/省略号.png"),
          title: "全部分类",
          color: "background:rgb(0,211,190)"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.search{
  height: 3.15rem;
  background-color: rgb(255,205,67);
  line-height: 3.15rem;
  text-align: center;
  display: flex;
  align-items: center;
}
.search a{
  font-size: .875rem;
  color:#999;
  display:inline-block;
  background: rgb(255,249,229);
  height: 2.1875rem;
  line-height: 2.1875rem;
  padding: 0 .625rem;
  padding-right: 1.75rem;
  border-radius: .6875rem;
}
.city{
  width: 5rem;
  font-size: .875rem;
}
.man{
  width: 27px;
  padding-left: .5rem;
}
.search_icon{
  position: relative;
  top:.1875rem;
  width: .875rem;
}
.ad{
  height: 3.15rem;
  background-color: #000;
  display:flex;
  align-items: center;
}
.left{
  flex:1;
  display: flex;
}
.right{
  flex:1;
  display: flex;
  align-items: center;
}
.left_cont{
  display:inline-block;
}
.p_top{
  font-size: .875rem;
  color: #fff;
  padding-bottom: .0625rem;
}
.p_bott{
  font-size: .75rem;
  color:#999;
}
.ad img{
  width: 2.2rem;
  height: 2.2rem;
  padding: 0 .6875rem;
}
.right a{
  display: inline-block;
  position: absolute;
  right:15px;
  color:#000;
  font-size: .75rem;
  padding: 0.5rem .5rem;
  border-radius: .5rem;
  background-color: rgb(255,203,67);
}
.page{
  padding: .625rem 0;
  height: 8.75rem;
  margin-bottom:10px;
  background-color: #fff;
}
.li {
  display: inline-block;
  width: 20%;
  text-align: center;
  padding-bottom: .9375rem;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #fd9d21;
  position: relative;
}
.icon_image {
  width: 25px;
  height: 23px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.title {
  font-size: 12px;
  padding-top: 7px;
  color: #666;
}
</style>
