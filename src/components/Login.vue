<template>
  <div>
    <div class="login_bar">
      <a href="" class="login">登陆</a><a href="" class="register">注册</a>
      <div class="position">
        城市:<img src="../assets/position.png" alt="" class="icon" />
        <span class="city">上海</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style scoped>
.login_bar {
  display: flex;
  align-items: center;
  padding: 15px 0;
  margin-right: 30px;
  position: relative;
}
.login,
.register {
  color: #111;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #ffd000;
}
.login {
  margin-left: 20px;
}
.position {
  font-size: 12px;
  color: #666;
  position: absolute;
  right: 0;
}
.city {
  font-size: 14px;
  color: #000;
}
.icon {
  width: 12px;
  padding: 0 5px;
}
</style>
