<template>
  <div>
    <NavBar />
    <product />
    <evaluate />
    <business />
    <meal />
    <purchase/>
    <evaluation/>
    <recommend/>
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
import recommend from "../components/recommend"
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
</style>
