<template>
  <div>
    <NavBar />
    <product />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import product from "../components/product";
export default {
  name: "Detials",
  components: {
    NavBar,
    product
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
body{
  background-color: rgb(240,240,240);
}
</style>
