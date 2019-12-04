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
  padding: .9375rem 0;
  margin-right: 1.875rem;
  position: relative;
}
.login,
.register {
  color: #111;
  font-size: .875rem;
  padding: .3125rem .9375rem;
  border-radius: .3125rem;
  margin-right: .625rem;
  background-color: #ffd000;
}
.login {
  margin-left: 1.25rem;
}
.position {
  font-size: .75rem;
  color: #666;
  position: absolute;
  right: 0;
}
.city {
  font-size: .875rem;
  color: #000;
}
.icon {
  width: .75rem;
  padding: 0 .3125rem;
}
</style>
