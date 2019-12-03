<template>
  <div>
    <div class="shop_item">
      <img :src="data.img" alt />
      <div class="cont">
        <div class="name">{{data.title}}</div>
        <div class="desc">{{data.desc}}</div>
        <div class="info">
          <span class="price">{{data.price}}</span>
          <span class="locally_price">门市价:{{data.locallyPrice}}</span>
          <span class="sells">{{data.sells}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopItem",
  props: {
    data: Object
  }
};
</script>
<style scoped>
.shop_item {
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 0.625rem;
}
.shop_item img {
  padding: 0.625rem;
  padding-left: 0;
  width: 5.625rem;
  height: 5.625rem;
}

.cont {
  display: inline-block;
}
.name {
  position: absolute;
  top: 0.625rem;
  font-size: 0.9375rem;
  color: #333;
}
.desc {
  font-size: 0.75rem;
  color: #999;
  position: relative;
  bottom: 0.3125rem;
}
.info {
  position: absolute;
  bottom: 0.625rem;
  width: 15.625rem;
}
.price {
  color: rgb(255, 102, 0);
  font-size: 1rem;
  font-weight: bold;
}
.locally_price {
  color: #666;
  font-size: 0.75rem;
  padding-left: 0.3125rem;
}
.sells {
  color: #999;
  font-size: 0.875rem;
  position: absolute;
  right: 0;
}
</style>