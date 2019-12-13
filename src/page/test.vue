<template>
  <div id="example">
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <p>{{ now }}</p>
    <ul>
      <li v-for="n of evenNumbers" :key="n">{{n}}</li>
    </ul>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      message: "hello world",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    evenNumbers() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    },
    now() {
      return Date.now();
    }
  },
  watch: {},
  methods: {}
};
</script>
<style scoped></style>
