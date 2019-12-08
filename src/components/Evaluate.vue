<template>
  <div>
    <div class="star">
      <i class="star_icon"></i>
      <i class="star_icon"></i>
      <i class="star_icon"></i>
      <i class="star_icon"></i>
      <i class="star_icon_half"></i>
      <div class="star_cont">4.4</div>
      <div class="num">
        357人评价 >
      </div>
    </div>
    <div class="evaluate">
      <div class="label" v-for="(item, index) of evaluate" :key="index">
        {{item.title}}{{item.num}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaluate",
  data(){
    return{
      evaluate:[
        {title:'味道赞',num:'56'},
        {title:'回头客',num:'35'},
        {title:'服务热情',num:'25'},
        {title:'干净整洁',num:'24'},
        {title:'价格实惠',num:'21'},
        {title:'肉类好',num:'20'},
        {title:'分量足',num:'20'},
        {title:'菜品不错',num:'20'},
        {title:'上菜快',num:'7'},
        {title:'饮品赞',num:'4'},
      ]
    }
  }
};
</script>

<style scoped>
.star_icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../images/star.png);
  background-size: 18px;
}
.star_cont {
  color: #fa952f;
  padding-left: 5px;
}
.star_icon_half {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../images/star_half.png);
  background-size: 18px;
}
.star {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  margin-top: 1px;
  height: 50px;
  padding: 0 10px;
}
.num {
  position: absolute;
  right: 0;
  padding-right: 10px;
  font-size: 14px;
  color: #999;
}
.evaluate{
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  background-color: #fff;
  margin-top: 1px;
}
.label{
  padding: 4px 8px;
  color:#FDB338;
  border:1px solid #FDB338;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>
