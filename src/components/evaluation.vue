<template>
  <div class="evaluation">
    <div class="header">
      <div class="title">评价</div>
      <div class="star">
        <i class="star_icon"></i>
        <i class="star_icon"></i>
        <i class="star_icon"></i>
        <i class="star_icon"></i>
        <i class="star_icon_half"></i>
        <div class="star_cont">4.4</div>
      </div>
    </div>
    <div v-for="(item, index) of user" :key="index" class="eva_cont">
      <div class="eva_cont_top">
        <img :src="item.profile" alt="" class="header_img" />
        <div class="top_right">
          <div class="header_name">
            {{ item.name }}
          </div>
          <div class="star_box">
            <i :class="item.star" class="itemstar"></i>
            <i :class="item.star" class="itemstar"></i>
            <i :class="item.star" class="itemstar"></i>
            <i :class="item.star" class="itemstar"></i>
            <i :class="item.star" class="itemstar"></i>
            <div class="date">{{ item.date }}</div>
          </div>
        </div>
      </div>
      <div class="discuss">{{ item.discuss }}</div>
      <div class="address">{{ item.address }}</div>
    </div>
    <div class="check_msg">
      查看全部357条评价
      <img src="../images/right_green.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "evaluation",
  data() {
    return {
      user: [
        {
          profile: require("../images/profile.jpg"),
          name: "ama798878371",
          star: "star_icon",
          date: "2019-06-28",
          discuss: "味道不错👍 小哥哥也挺帅的 环节也不差 #桥头排骨#",
          address: "桥头排骨（金安总店）"
        },
        {
          profile: require("../images/profile1.png"),
          name: "舒三月",
          star: "star_icon",
          date: "2019-06-11",
          discuss: "超好吃",
          address: "桥头排骨（金安总店）"
        },
        {
          profile: require("../images/profile2.jpg"),
          name: "UIq680673115",
          star: "star_icon",
          date: "2019-11-10",
          discuss:
            "甘梅地瓜味道还可以，桥头排骨肉一股腥味，基本没吃全扔了，店主装袋用手撑开袋子，并且等待的时候看到店主用手把掉在桌子上的排骨放回去，态度也一般，给人感觉不好。",
          address: "桥头排骨（海心沙店）"
        }
      ]
    };
  }
};
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 10px;
}
.title {
  color: #333;
  padding: 10px;
}
.star_icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../images/star.png);
  background-size: 18px;
}
.nostar_icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../images/nostar.png);
  background-size: 18px;
}
.star_cont {
  color: #fa952f;
  padding-left: 5px;
}
.star_icon_half {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../images/star_half.png);
  background-size: 18px;
}
.star {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1px;
  height: 50px;
  padding: 0 10px;
  position: absolute;
  right: 0;
}
.eva_cont {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.header_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.header_name {
  color: #777;
  font-size: 12px;
  padding-left: 3px;
  padding-bottom: 3px;
}
.itemstar {
  transform: scale(0.8);
  margin-right: -1px;
}
.eva_cont_top{
  display: flex;
  align-items: center;
}
.star_box{
  display: flex;
}
.date{
  font-size: 12px;
  color:#777;
  padding-left: 10px;
}
.header_img{
  padding: 10px 5px 10px 10px;
}
.discuss{
  padding: 10px;
  font-size: 14px;
}
.address{
  padding: 10px;
  font-size: 14px;
  color:#666;
}
.check_msg{
  display: flex;
  align-items: center;
  color:#06c1ae;
  position: relative;
  padding: 10px;
  
  background-color: #fff;
}
.check_msg img{
  width: 15px;
  position: absolute;
  right: 15px;

}
</style>
