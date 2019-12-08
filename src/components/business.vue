<template>
  <div>
    <div class="header">
      商家信息
    </div>
    <div class="cont">
      <div class="cont_left">
        <div class="cont_left_top">
          <p class="top">
            桥头排骨 (金安总店)
          </p>
          <p class="address">金安区红街D3区首层0070号</p>
          <i class="address_icon"></i> <span class="near">离我最近</span>
        </div>
      </div>
      <div class="cont_right">
        <i class="phone_icon"></i>
      </div>
    </div>
    <div class="branch">
      查看全部2家适用分店
      <img src="../images/right_green.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "business"
};
</script>

<style scoped>
.header {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 10px;
  color: #333;
  margin-bottom: 1px;
}
.cont {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  padding: 15px 0 15px 10px;
  padding-left: 10px;
}
.cont_right {
  position: absolute;
  right: 0;
  padding: 0 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 60px;
  line-height: 60px;
}

.top {
  font-weight: bold;
  font-size: #333;
}
.address {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}
.near {
  font-size: 14px;
  color: #eb8706;
}
.address_icon {
  display: inline-block;
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -180px 21px;
  width: 15px;
  height: 19px;
  margin-top: 5px;
  margin-right: 10px;
  vertical-align: bottom;
}
.phone_icon {
  display: inline-block;
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  background-position: -158px -28px;
  width: 16px;
  height: 22px;
  transform: scale(.85)
}
.branch{
  display: flex;
  color:#06c1ae;
  position: relative;
  padding: 10px;
  background-color: #fff;
  align-items: center;
  font-size: 14px;
  margin-top: 1px;
}
.branch img{
  position: absolute;
  right: 0;
  width: 16px;
  margin-right: 15px;
  /* padding-right: 10px; */
}
</style>
