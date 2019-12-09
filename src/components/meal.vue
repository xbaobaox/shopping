<template>
  <div>
    <div class="meal">
      <p class="title">套餐</p>
      <p class="cont">小吃 2 选 1</p>
    </div>
    <div class="menu">
      <div class="menu_1">
        <p class="menu_title">桥头排骨</p>
        <p class="num">1 份</p>
        <P class="price">18元</P>
      </div>
      <div class="menu_2">
        <p class="menu_title">绝味肉条</p>
        <p class="num">1 份</p>
        <p class="price">18元</p>
      </div>
      <div class="space"></div>
      <div class="image_text">
        查看图文详情
        <img src="../images/right_green.png" alt="" class="right_img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "meal"
};
</script>

<style scoped>
.meal {
  background-color: #fff;
  margin-top: .625rem;
}
.menu {
  background-color: #fff;
  font-size: .9375rem;
  color: #444;
}
.title {
  font-size: 1.0625rem;
  padding: .625rem .625rem;
}
.cont {
  border-top: .0625rem solid rgba(0, 0, 0, 0.03);
  border-bottom: .0625rem solid rgba(0, 0, 0, 0.03);
  text-align: center;
  background-color: rgb(248, 249, 250);
  padding: .3125rem 0;
  color: #333;
}
.menu_1{
  display: flex;
  border-bottom: .0625rem solid rgba(0, 0, 0, 0.1);
}
.menu_2{
  display: flex;
  border-bottom: .0625rem solid rgba(0, 0, 0, 0.1);
}
.menu_title{
  width: 50%;
  padding: .625rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1)
}
.num{
  width: 30%;
  padding: .625rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.price{
  padding: .625rem;
  width: 20%;
}
.space{
  height: 1.875rem;
  background-color: #fff;
  /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
  border-bottom: .0625rem solid rgba(0, 0, 0, 0.1);
}
.image_text{
  color:#06c1ae;
  display:flex;
  align-items: center;
  position: relative;
  padding: .625rem;
}
.right_img{
  width: 1.25rem;
  position: absolute;
  right: .9375rem;
}
</style>
