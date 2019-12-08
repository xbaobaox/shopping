<template>
  <div>
    <NavBar />
    <product />
    <evaluate />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import product from "../components/product";
import Evaluate from "../components/Evaluate.vue";
export default {
  name: "Detials",
  components: {
    NavBar,
    product,
    Evaluate
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
