<template>
  <div>
    <div class="navbar">
      <a href="">
        <img src="../images/left.png" alt="" class="left_icon" />
      </a>
      <div class="title">
        团购详情
      </div>
      <div class="nav_right">
        <div class="collect">
          <i class="collect_icon"></i>
          <span class="collect_text">收藏</span>
        </div>
        <div class="nav">
          <i class="nav_icon"></i>
          <span>导航</span>
        </div>
      </div>
    </div>
    <div class="ad">
      <img src="../images/file.png" alt="" class="ad_img" />
    </div>
  </div>
    
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
     
    };
  }
};
</script>

<style scoped>
.navbar {
  height: 3.125rem;
  background-color: #06c1ae;
  position: relative;
  display: flex;
  align-items: center;
}
.left_icon {
  width: 2.1875rem;
  height: 2.1875rem;
  padding: 0 0.625rem;
}
.title {
  text-align: center;
  width: 230px;
  color: #fff;
  font-size: 18px;
}
.nav_right {
  display: flex;
}
.collect,
.nav {
  color: #fff;
  font-size: 8px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
}
.collect_icon {
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -157px 0px;
  width: 20px;
  height: 22px;
  padding-bottom: 3px;
}
.nav_icon {
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -129px -26px;
  width: 20px;
  height: 22px;
  padding-bottom: 3px;
}
.ad_img {
  max-width: 100%;
  vertical-align: bottom;
}
</style>
