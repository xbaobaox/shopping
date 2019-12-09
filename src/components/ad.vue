<template>
  <div class="ad">
    <div class="header">
      看了本团购的用户还看了
      <p class="gg">广告</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'ad',
  data(){
    return{
      D:[
        {
          
        }
      ]
    }
  }
}
</script>
<style scoped>
.ad{
  background-color: #fff;
  margin-top: 10px;
  
}
.header{
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  padding-left: 0;
  margin-left: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header,.gg{
  font-size: 18px;
  color:#999;
}
.gg{
  position: absolute;
  right: 15px;
}
</style>