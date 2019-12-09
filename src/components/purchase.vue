<template>
  <div>
    <div class="purchase">
      <p class="header">购买须知</p>
      <p class="purchase_title">
        有效期
      </p>
      <p class="purchase_cont">
        2017.6.1 至 2019.12.19 23:59（周末、法定节假日通用）
      </p>
      <p class="purchase_title">
        使用时间
      </p>
      <p class="purchase_cont">
       10:00-22:00
      </p>
      <p class="purchase_title">
        使用规则
      </p>
      <p class="purchase_cont">
       <ul>
         <li>无需预约，消费高峰期可能需要等位</li>
         <li>商家提供免费WiFi</li>
         <li>停车位收费标准：有停车位</li>
         <li>发票问题请询问商家</li>
         <li>团购用户不可同时享受商家其他优惠</li>
         <li>店内无包间</li>
         <li>每张美团券建议1人使用</li>
       </ul>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name:'purchase'
}
</script>

<style scoped>
.purchase{
  margin-top: 10px;
  /* padding: 10px; */
  background-color: #fff;
}
.header{
  padding: 10px;
}
.purchase_cont ul li{
  list-style:disc ;
}
.header{
  /* padding: 10px ; */
  border-bottom: 1px solid rgba(0, 0, 0, .05)
}
.purchase_title{
  color:#ff9900;
  padding:10px;
}
.purchase_cont{
  padding: 0 20px;
  font-size: 14px;
  color:#666;
}
.purchase_cont ul{
  padding-left:20px;
  padding-bottom:20px;
}
</style>