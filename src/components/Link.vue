<template>
  <div class="link_flex">
    <ul class="link_box">
      <li class="link"><a href="#" class="link_item">首页</a></li>
      <li class="link separate">|</li>
      <li class="link"><a href="#" class="link_item">我的</a></li>
      <li class="link separate">|</li>
      <li class="link"><a href="#" class="link_item">美团下载</a></li>
      <li class="link separate">|</li>
      <li class="link"><a href="#" class="link_item">电脑版</a></li>
      <li class="link separate">|</li>
      <li class="link"><a href="#" class="link_item">帮助</a></li>
    </ul>
    <div class="friend_box">
      <span class="fri_span">友情链接:</span>

      <a v-for="(item, index) of link" :key="index" class="friend_link">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Link",
  data() {
    return {
      link: [
        { id: 1, name: "猫眼电影" },
        { id: 2, name: "大众点评" },
        { id: 3, name: "美团旅行" },
        { id: 4, name: "榛果民宿" },
        { id: 5, name: "大众点评下载" },
        { id: 6, name: "美团收银官网" },
        { id: 7, name: "美团点评餐饮学院" },
        { id: 8, name: "快驴进货商家合作" }
      ]
    };
  }
};
</script>
<style scoped>
.link_flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link_box {
  display: flex;
  align-items: center;
}
.link_item {
  color: #fe8c00;
  font-size: .75rem;
}
.separate {
  padding: 0 1.125rem;
  font-size: .75rem;
  color: #000;
}
.friend_ul {
  display: inline-flex;
}
.fri_span{
  font-size: .75rem;
  color:#666;
}
.friend_box{
  padding: 0 1.6875rem;
  margin-top: .625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center
}
.friend_link{
  font-size: .75rem;
  color:#666;
  margin-right: 1.125rem;
  margin-left: 1.125rem;
}
</style>
