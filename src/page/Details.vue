<template>
  <div>
    <NavBar />
    <product />
    <evaluate />
    <business />
    <meal />
    <purchase />
    <evaluation />
    <recommend />
    <ad />
    <div class="dqwz">
      当前位置: 上海团购 > 桥头排骨团购
    </div>
    <Login />
    <div class="copyright">
      <span class="copyright_left"
        >©2019 美团网
        <a href="#" class="copyright_a">京ICP证070791号</a>
      </span>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import product from "../components/product";
import Evaluate from "../components/Evaluate.vue";
import business from "../components/business";
import meal from "../components/meal";
import purchase from "../components/purchase";
import evaluation from "../components/evaluation";
import recommend from "../components/recommend";
import ad from "../components/ad";
import Login from "../components/Login"
export default {
  name: "Detials",
  components: {
    NavBar,
    product,
    Evaluate,
    business,
    meal,
    purchase,
    evaluation,
    recommend,
    ad,
    Login
  }
};
</script>

<style>
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
body {
  background-color: rgb(240, 240, 240);
}
.copyright {
  margin: 1rem 1rem 0 1rem;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.1);
  text-align: center;
}
.copyright_left,
.copyright_a {
  font-size: 0.75rem;
  color: #999;
}
.copyright_left {
  display: inline-block;
  padding: 0 0.625rem;
  position: relative;
  background-color: rgb(240, 240, 240);
  top: -13px;
}
.dqwz {
  padding: 10px 0 0 10px;
  font-size: 14px;
  color: #06c1ae;
}
</style>
