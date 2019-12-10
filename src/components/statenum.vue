<template>
  <div>
    <div class="title">
      <router-link to="/">
        <img src="../images/leftblack.png" alt="" class="back" />
      </router-link>
      手机号码归属地
    </div>
    <div class="state_num" v-for="(item, index) of D" :key="index">
      <div class="box" v-on:moushmove="move(index)">
        <div class="anthor" :id="item.id">{{ item.a }}</div>
        <div class="state">
          {{ item.state }}
          <div class="num">{{ item.num }}</div>
        </div>
      </div>
    </div>
    <div class="anthor">
      <ul>
        <li
          v-for="(item, index) of anthor"
          :key="index"
          @click="selected(index)"
          :class="{ select: index === x }"
        >
          <a :href="item.href" class="href">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "statenum",
  data() {
    return {
      x: 0,
      D: [
        {
          a: "热门",
          state: "中国",
          num: "+86",
          id: "hot"
        },
        {
          state: "香港(中国)",
          num: "+852"
        },
        {
          state: "澳门(中国)",
          num: "+853"
        },
        {
          state: "台湾(中国)",
          num: "+886"
        },
        {
          state: "新加坡",
          num: "+65"
        },
        {
          state: "澳大利亚",
          num: "+61"
        },
        {
          state: "新西兰",
          num: "+64"
        },
        {
          state: "日本",
          num: "+81"
        },
        {
          state: "韩国",
          num: "+82"
        },
        {
          id: "a",
          a: "A",
          state: "中国",
          num: "+86"
        },
        {
          state: "香港(中国)",
          num: "+852"
        },
        {
          state: "澳门(中国)",
          num: "+853"
        },
        {
          state: "台湾(中国)",
          num: "+886"
        },
        {
          state: "新加坡",
          num: "+65"
        },
        {
          state: "澳大利亚",
          num: "+61"
        },
        {
          state: "新西兰",
          num: "+64"
        },
        {
          state: "日本",
          num: "+81"
        },
        {
          state: "韩国",
          num: "+82"
        },
        {
          id: "b",
          a: "B",
          state: "巴巴多斯",
          num: "+1246"
        },
        {
          state: "巴布亚新几内亚",
          num: "+675"
        },
        {
          state: "巴布亚新几内亚",
          num: "+675"
        },
        {
          state: "巴布亚新几内亚",
          num: "+675"
        },
        {
          state: "巴布亚新几内亚",
          num: "+675"
        },
        {
          state: "巴布亚新几内亚",
          num: "+675"
        }
      ],
      anthor: [
        { href: "#hot", name: "热" },
        { href: "#a", name: "A" },
        { href: "#b", name: "B" },
        { href: "#c", name: "C" },
        { href: "#d", name: "D" },
        { href: "#e", name: "E" },
        { href: "#f", name: "F" },
        { href: "#g", name: "G" },
        { href: "#h", name: "H" },
        { href: "#i", name: "I" },
        { href: "#k", name: "K" },
        { href: "#l", name: "L" },
        { href: "#m", name: "M" },
        { href: "#n", name: "N" },
        { href: "#p", name: "P" },
        { href: "#r", name: "R" },
        { href: "#s", name: "S" },
        { href: "#t", name: "T" },
        { href: "#x", name: "X" },
        { href: "#y", name: "Y" },
        { href: "#z", name: "Z" }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    selected(e) {
      this.x = e;
    },
    onScroll(){
      const navCont = document.querySelectorAll('.box')
      const offsetTopArr = []
      navCont.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
    
    },
    // move(index) {
    //   let jump = document.querySelectorAll(".box");
    //   let total = jump[index].offsetTop; //返回当前元素的相对垂直偏移位置的偏移容器
    //   document.body.scrollTop = total; //返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
    //   console.log(total);
    // }
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
.title {
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  position: relative;
}
.title img {
  width: 28px;
  position: absolute;
  left: 7px;
  top: -1px;
}
.hot {
  font-size: 12px;
  color: #999;
  padding: 10px 0 0px 0;
}
.state_num {
  margin: 0 10px;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.num {
  position: absolute;
  right: 20px;
  font-size: 12px;
  color: #999;
}
.state {
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: flex-end;
}
.anthor {
  margin-bottom: 5px;
  font-size: 12px;
  color: #666;
}
.anthor ul li a {
  font-size: 12px;
}
.anthor ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 2px;
  top: 30%;
}
.select {
  text-align: center;
  display: inline-block;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background-color: #ffd000;
}
.href {
  color: #333;
}
</style>
