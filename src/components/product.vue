<template>
  <div>
    <div class="product">
      <div class="product_img">
        <img :src="product.img" alt="" />
      </div>
      <div class="img_text">
        <div class="title">{{ product.title }}</div>
        <div class="desc">{{ product.desc }}</div>
      </div>
    </div>
    <div class="pay">
      <p class="price">{{ product.price }}</p>
      元
      <p class="locallyPrice">门市价:{{ product.locallyPrice }} 元</p>
      <div class="paybtn">立即抢购</div>
    </div>
    <div class="explain">
      <div class="explain_cont green">
        <i class="explain_icon_1"></i>支持随时退款
      </div>
      <div class="explain_cont green">
        <i class="explain_icon_2"></i>支持过期自动退
      </div>
      <div class="explain_cont gray">
        <i class="explain_icon_3"></i>已售{{ product.sells }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",
  data() {
    return {
      product: {
        img: require("../images/1f3644fc625b8564fb8e4d235f6809fc125908.jpg"),
        title: "桥头排骨",
        desc: "小吃2选1,提供免费WiFi",
        price: "15.9",
        locallyPrice: "18",
        sells: "已售5324"
      }
    };
  }
};
</script>
<style scoped>
.product {
  position: relative;
}
.product_img {
  height: 200px;
  overflow: hidden;
}
.product img {
  max-width: 100%;
  position: relative;
  bottom: 0.5rem;
}
.title,
.desc {
  padding: 0 0 10px 10px;
  color: #fff;
}
.title {
  font-size: 19px;
  font-weight: bold;
}
.desc {
  font-size: 14px;
}
.img_text::after {
  content: "";
  z-index: -1;
  height: 85px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.58),
    rgba(0, 0, 0, 0.3) 64%,
    transparent
  );
}
.img_text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.pay {
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  padding: 10px 10px 10px 5px;
  font-size: 14px;
  color: #06c1ae;
}
.price {
  font-size: 30px;
  font-weight: 900;
  color: #06c1ae;
  padding-left: 5px;
  position: relative;
  top: 3px;
}
.locallyPrice {
  color: #999;
  padding-left: 5px;
}
.paybtn {
  position: absolute;
  right: 0;
  padding: 5px 24px;
  border-radius: 3px;
  margin-right: 10px;
  font-size: 20px;
  color: #fff;
  background-color: rgb(255, 153, 0);
}
.explain {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  padding: 20px 30px 10px 10px;
  margin-top: 1px;
}
.explain_icon_1,
.explain_icon_2,
.explain_icon_3 {
  display: inline-block;
  background-image: url(../../src/images/spr.png);
  background-size: 100px;
  vertical-align: -3px;
  transform: scale(1.15);
  margin: 0 10px;
}
.explain_icon_1 {
  background-position: -120px -74px;
  width: 19px;
  height: 21px;
}
.explain_icon_2 {
  background-position: -140px -74px;
  width: 18px;
  height: 21px;
}
.explain_icon_3 {
  background-position: -160px -74px;
  width: 18px;
  height: 21px;
}

.explain_cont {
  color: #666;
}
.explain_cont {
  font-size: 14px;
  width: 50%;
  padding-bottom: 10px;
}
</style>
