<template>
  <div>
    <div class="flex">
      <div class="header">
        <img src="../images/7c71ecc4b44d0e17447076cd23e501cb31967.png" alt="" />
      </div>
      <div class="phone_info">
        <router-link to="/phoneIndex" class="state">{{country}}{{num}}</router-link><span> ></span
        ><input type="text" placeholder="请输入手机号" class="phone_num" />
      </div>
      <div class="phone_code">
        <input type="text" placeholder="请输入手机验证码" class="code" /><a
          href=""
          class="get"
          >获取验证码</a
        >
      </div>

      <input type="button" value="登 录" class="signbtn" />
      <p class="tip">未注册的手机号验证后将自动登录</p>
      <a href=""></a>
      <div class="deal">
        登录即代表您已经同意 <a href="" class="deal_cont">《美团网用户协议》</a>
      </div>
      <a href="" class="login">账号密码登陆</a>
    </div>
    <div class="anchor">
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
  created(){
    console.log(this.$store,this.$store)
    this.country=this.$store.state.countryName;
    this.num=this.$store.state.countryCode;
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
input {
  border: none;
  outline: none;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}
.header {
  height: 120px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.header img {
  width: 5rem;
}
.state {
  font-size: 14px;
  color: #000;
}
.phone_info span {
  font-size: 12px;
  color: #999;
}
.phone_info {
  padding: 5px 0px;
  margin: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  width: 90%;
}
.phone_num {
  padding-left: 5px;
}
.phone_num::placeholder {
  font-size: 14px;
  color: rgb(190, 190, 190);
}
.phone_code {
  width: 90%;
  padding:5px 3px;
  margin: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;
}
.get {
  font-size: 14px;
  position: absolute;
  right: 0;
  color: #000;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  padding-left: 5px;
}
.signbtn {
  display: block;
  text-align: center;
  font-size: 14px;
  color: rgb(196, 196, 196);
  /* width: 200px; */
  padding: 10px 40%;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  background-color: rgb(255, 236, 179);
}
.tip {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.deal {
  position: absolute;
  font-size: 13px;
  color: rgb(175, 175, 175);
  bottom: 20px;
}
.deal_cont {
  color: #fe8c00;
}
.login{
  margin-top: 10px;
  color:#000;
  font-weight: 300;
  font-size: 14px;
}
</style>
