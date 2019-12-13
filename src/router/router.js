import APP from "../App.vue";
export default [
  {
    path: "/",
    component: APP,
    children: [
      {
        path: "",
        component: r =>
          // require.ensure([], () => r(require("../page/App.vue")), "App")
          require.ensure([], () => r(require("../page/Signin.vue")), "Signin")
          // require.ensure([], () => r(require("../components/phoneIndex")), "phoneIndex")

        // require.ensure([],() => r(require("../page/Details.vue")), "details")//最后的'details' 给路由定义一个名字
      }
      ,
      {
        path: "/phoneIndex",
        component: r =>
            require.ensure([],()=>r(require('../components/phoneIndex.vue')), 'phoneIndex')
      }
     


      
      // {
      //   path:"/details",
      //   component:r =>
      //     require.ensure([],() => r(require("../components/details.vue")), "details")
      // }
    ]
  }
];
