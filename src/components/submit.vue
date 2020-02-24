<template>
  <div class="all">
    <div class="head">
      <img src="../images/left.png" alt="" class="head_icon" />
      <p class="head_p">提交订单</p>
    </div>
    <p class="title">串烤天下2-3人餐</p>
    <div class="panel">
      <div class="pricebar">
        单价: <span class="price_data">{{ price }}元</span>
      </div>
      <div class="count">
        数量:
        <div class="count_right">
          <button
            :disabled="isTrue"
            class="sub"
            @click="sub"
            :class="{ able: count > 1 }"
          >
            -</button
          ><input type="text" :value="count" readonly class="count_input" />
          <button class="add" @click="add">+</button>
        </div>
      </div>
      <div class="total">
        总价:<span class="total_data">{{ fixed }}元</span>
      </div>
      <div class="pay">
        还需支付: <span class="pay_data">{{ fixed }}元</span>
      </div>
      <p class="sendphone">美团券将发送到您绑定的手机号码</p>
      <div class="phonebar">
        153****8353
        <span class="phonebar_right"
          >绑定新号码
          <img
            src="../images/right.png"
            alt="right"
            class="phonebar_righticon"
          />
        </span>
      </div>
      <button class="submit_order" @click="showDio">提交订单</button>
    </div>
    <van-dialog v-model="show" title="支付订单" show-cancel-button>
      <div class="dia_box">
        <span class="dia_title">总计:￥</span
        ><span class="dia_price">{{ fixed }}</span>
      </div>
      <p class="dia_name">串烤天下2-3人餐</p>
      <van-radio-group v-model="radio">
        <div class="sele1">
          <img
            src="../images/meituanlogo.png"
            alt=""
            class="meituan_logo"
          /><span class="meituan_pay">美团支付</span
          ><van-radio
            name="1"
            checked-color="rgb(255,201,0)"
            class="radio"
          ></van-radio>
        </div>
        <div class="sele2">
          <img src="../images/weixinlogo.png" alt="" class="weixin_logo" />
          <span class="weixin_pay">微信支付</span>
          <van-radio
            name="2"
            checked-color="rgb(255,201,0)"
            class="radio"
          ></van-radio>
        </div>
      </van-radio-group>
    </van-dialog>
    <Login />
    <Link />
  </div>
</template>

<script>
import Login from "../components/Login";
import Link from "../components/Link";
export default {
  name: "submit",
  components: {
    Login,
    Link
  },
  computed: {
    fixed() {
      let fixNum = this.count * this.price;
      return fixNum.toFixed(1);
    }
  },
  data() {
    return {
      count: 1,
      price: 79.8,
      isTrue: true,
      bgc: "#fff",
      show: false,
      radio: "1"
    };
  },
  methods: {
    add() {
      this.count++;
      if (this.count > 1) {
        this.isTrue = false;
      }
      console.log("add");
    },
    sub() {
      this.count--;
      if (this.count <= 1) {
        this.isTrue = true;
      }
    },
    showDio() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.all {
  height: 100vh;
  background-color: rgb(240, 240, 240);
}
.head {
  background-color: #06c1ae;
  display: flex;
  align-items: center;
}
.head_icon {
  width: 28px;
  margin-left: 10px;
}
.head_p {
  color: #fff;
  font-size: 19px;
  flex: 1;
  text-align: center;
  padding: 15px 0;
}
.title {
  margin-top: 20px;
  padding: 10px;
}
.pricebar,
.count,
.total,
.pay,
.phonebar {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  position: relative;
  margin-bottom: 1px;
}
.price_data,
.count_right,
.total_data,
.pay_data,
.phonebar_right {
  position: absolute;
  right: 10px;
}
.pay {
  margin-top: 10px;
}
.total_data,
.pay_data {
  color: #ff9712;
  font-weight: bold;
}
.sendphone {
  margin-top: 30px;
  padding: 10px;
  font-size: 16px;
  color: #333;
}
.phonebar_righticon {
  width: 16px;
  vertical-align: -3px;
}
.submit_order {
  display: block;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  background-color: #f90;
  margin-bottom: 80px;
}
.sub,
.add {
  border: none;
  outline: none;
  padding: 5px 10px;
  border-radius: 3px;
}
.sub {
  border: 1px solid rgb(221, 221, 221);
}
.add {
  color: #06c1ae;
  background-color: #fff;
  border: 1px solid #06c1ae;
}
.able {
  border: 1px solid #06c1ae;
  background-color: #fff;
  color: #06c1ae;
}
.count_input {
  border: 1px solid rgb(179, 179, 179);
  padding: 5px;
  width: 60px;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
}
.phonebar_right {
  color: #999;
}
.dia_box {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.dia_price {
  font-size: 26px;
}
.dia_name {
  font-size: 12px;
  text-align: center;
  color: #999;
}
.sele1,
.sele2 {
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  position: relative;
}
.meituan_logo {
  width: 23px;
}
.meituan_pay {
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
}
.weixin_pay {
  margin-left: 10px;
}
.weixin_logo {
  width: 23px;
}
.radio {
  position: absolute;
  right: 30px;
}
.dia_title {
  margin-top: 30px;
}
.dia_name {
  margin-bottom: 30px;
}
</style>
