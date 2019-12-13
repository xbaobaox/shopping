<template>
  <div>
    <div class="title">
      <router-link to="/">
        <img src="../images/leftblack.png" alt="" class="back" />
      </router-link>
      手机号码归属地
    </div>
    <div class="scroll">
      <div class="state_num" v-for="(item, index) of D" :key="index">
        <div class="box">
          <div class="anthor" :id="item.id" v-if="item.a">
            {{ item.a }}
          </div>
          <div class="state">
            {{ item.state }}
            <div class="num">{{ item.num }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="anthor_right">
      <ul>
        <li
          v-for="(item, index) of anthor"
          :key="index"
          @click="selected(index); jump(index)"
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
          state: "阿尔巴尼亚",
          num: "+355"
        },
        { state: "阿尔及利亚", num: "+213" },
        { state: "阿富汗", num: "+93" },
        { state: "阿根廷", num: "+54" },
        { state: "爱尔兰(岛)", num: "+353" },
        { state: "埃及", num: "+20" },
        { state: "埃塞俄比亚", num: "+251" },
        { state: "爱沙尼亚", num: "+372" },
        { state: "阿联酋", num: "+971" },
        { state: "阿鲁巴", num: "+297" },
        { state: "阿曼", num: "+968" },
        { state: "安道尔共和国", num: "+376" },
        { state: "安哥拉", num: "+244" },
        { state: "安圭拉岛", num: "+1264" },
        { state: "安提瓜及巴布达", num: "+268" },
        { state: "奥地利", num: "+43" },
        { state: "阿塞拜疆", num: "+994" },
        { state: "阿根延", num: "+54" },
        { state: "阿拉伯联合酋长国", num: "+972" },
        { state: "阿拉伯也门共和国", num: "+968" },
        { state: "阿拉斯加", num: "+1907" },
        { state: "阿鲁巴岛", num: "+297" },
        { state: "阿森松", num: "+247" },
        { state: "爱尔兰", num: "+353" },
        { state: "安道尔", num: "+33628" },
        { state: "安提瓜和巴布达", num: "+1809" },

        {
          id: "b",
          a: "B",
          state: "巴巴多斯",
          num: "+1246"
        },
        { state: "	巴布亚新几内亚", num: "+675" },
        { state: "	巴哈马", num: "+1242" },
        { state: "	白俄罗斯", num: "+375" },
        { state: "	百慕大", num: "+441" },
        { state: "	巴基斯坦", num: "+92" },
        { state: "	巴林", num: "+973" },
        { state: "	巴拿马", num: "+507" },
        { state: "	保加利亚", num: "+359" },
        { state: "	北马里亚那群岛", num: "+1670" },
        { state: "	贝宁", num: "+229" },
        { state: "	比利时", num: "+32" },
        { state: "	冰岛", num: "+354" },
        { state: "	波多黎各", num: "+1787" },
        { state: "	波兰", num: "+48" },
        { state: "	玻利维亚", num: "+591" },
        { state: "	伯利兹", num: "+501" },
        { state: "	博内尔岛", num: "+599" },
        { state: "	波斯尼亚和黑塞哥维那", num: "+387" },
        { state: "	博茨瓦那", num: "+267" },
        { state: "	不丹", num: "+975" },
        { state: "	布基纳法索国", num: "+226" },
        { state: "	布隆迪", num: "+257" },
        { state: "	巴西", num: "+55" },
        { state: "	百慕大群岛", num: "+1809" },
        { state: "	博茨瓦纳", num: "+267" },
        { state: "	布基纳法索", num: "+226" },
        {
          id: "c",
          a: "C",
          state: "朝鲜",
          num: "+850"
        },
        {
          state: "赤道几内亚",
          num: "+240"
        },
        {
          id: "d",
          a: "D",
          state: "丹麦",
          num: "+45"
        },
        { state: "德国", num: "+49" },
        { state: "东帝汶", num: "+670" },
        { state: "多哥", num: "+228" },
        { state: "多明尼加共和国", num: "+1849" },
        { state: "多米尼克", num: "+1767" },
        { state: "东萨摩亚", num: "+684" },
        { state: "多米尼加共和国", num: "+1809" },
        {
          id: "e",
          a: "E",
          state: "厄瓜多尔",
          num: "+593"
        },
        { state: "厄立特里亚国", num: "+291" },
        { state: "俄罗斯", num: "+7" },
        {
          id: "f",
          a: "F",
          state: "法国",
          num: "+33"
        },
        { state: "法罗群岛", num: "+298" },
        { state: "梵蒂冈", num: "+379" },
        { state: "法属波利尼西亚", num: "+689" },
        { state: "法属圭亚那", num: "+594" },
        { state: "法属西印度群岛", num: "+809" },
        { state: "斐", num: "济+679" },
        { state: "菲律宾", num: "+63" },
        { state: "芬兰", num: "+358" },
        { state: "富图纳群岛", num: "+681" },
        { state: "法兰", num: "+48" },
        { state: "法属波里尼西亚", num: "+689" },
        { state: "佛得角", num: "+500" },
        {
          id: "g",
          a: "G",
          state: "冈比亚",
          num: "+220"
        },
        { state: "刚果", num: "+242" },
        { state: "刚果民主共和国", num: "+243" },
        { state: "格恩西岛", num: "+44" },
        { state: "格陵兰岛", num: "+299" },
        { state: "格林纳达", num: "+1473" },
        { state: "格鲁吉亚", num: "+995" },
        { state: "哥斯达黎加", num: "+506" },
        { state: "瓜德罗普岛", num: "+890" },
        { state: "关岛", num: "+1671" },
        { state: "古巴", num: "+53" },
        { state: "圭亚那", num: "+592" },
        { state: "哥伦比亚", num: "+57" },
        {
          id: "h",
          a: "H",
          state: "海地",
          num: "+509"
        },
        { state: "哈萨克斯坦", num: "+32" },
        { state: "黑山共和国", num: "+38" },
        { state: "荷兰", num: "+31" },
        { state: "洪都拉斯", num: "+50" },
        { state: "荷属安的列斯群岛", num: "+59" },
        {
          id: "j",
          a: "J",
          state: "加纳",
          num: "+233"
        },
        { state: "加拿大", num: "+1" },
        { state: "柬埔寨", num: "+855" },
        { state: "加蓬", num: "+241" },
        { state: "吉布提", num: "+253" },
        { state: "捷克共和国", num: "+420" },
        { state: "吉尔吉斯斯坦", num: "+331" },
        { state: "津巴布韦", num: "+263" },
        { state: "几内亚", num: "+224" },
        { state: "畿尼", num: "+245" },
        { state: "基里巴斯", num: "+686" },
        { state: "几内亚比绍", num: "+245" },
        { state: "加那利群岛", num: "+3422" },
        {
          id: "k",
          a: "K",
          state: "开曼群岛",
          num: "+1345"
        },
        { state: "喀麦隆", num: "+237" },
        { state: "卡塔尔", num: "+974" },
        { state: "克罗地亚共和", num: "+385" },
        { state: "科摩洛", num: "+269" },
        { state: "肯尼亚", num: "+254" },
        { state: "科威特", num: "+965" },
        { state: "库克群岛", num: "+682" },
        { state: "库拉索", num: "+5999" },
        { state: "科科斯岛", num: "+6722" },
        { state: "科克群岛", num: "+682" },
        { state: "科摩罗", num: "+269" },
        { state: "科特迪瓦", num: "+225" },
        { state: "科威物", num: "+966" }
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
  mounted() {},
  destroy() {},
  methods: {
    selected(e) {
      this.x = e;
    },
    jump(e){
      let jump=document.querySelector('.anthor');
      let total=jump[e].offsetTop;
      document.body.scrollTop=total;
    },
    // move() {
    //   let jump = document.querySelector(".scroll");
    //   let total = jump.scrollTop;
    //   console.log(total);
      //height:100vh;
      //
      // let jump = document.querySelectorAll(".box");
      // let total = jump[index].offsetTop; //返回当前元素的相对垂直偏移位置的偏移容器
      // document.body.scrollTop = total; //返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
      // console.log(total);
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
  font-size: 20px;
  position: fixed;
  background-color: rgb(255, 255, 255);
  width: 100%;
  z-index: 10;
  text-align: center;
  padding-top: 10px;
  margin-top: -8px;
}
.title img {
  width: 28px;
  position: absolute;
  left: 6px;
  top: 8px;
}
.scroll {
  padding-top: 30px;
  position: relative;
  /* overflow: hidden; */
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
.anthor,
.anthor_right {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
.anthor_right ul li a {
  /* margin-bottom: 5px; */
  color: #666;
  font-size: 12px;
}
.anthor_right ul {
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
