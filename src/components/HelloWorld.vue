<template>
 <div class="subject">
    <div class="search">
    </div>
    <ul class="flex">
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
body {
  

}
.search{
  height: 3rem;
  background-color: rgb(255,205,67)
}
.li {
  /* padding: 0.2rem 0; */
  margin-bottom: 20px;
  display: inline-block;
  width: 20%;
  text-align: center;
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
