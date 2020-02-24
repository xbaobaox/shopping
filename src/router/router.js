import APP from "../App.vue";
export default [
  {
    path: "/",
    component: APP,
    children: [
      {
        path: "",
        component: r =>
        //   require.ensure(
        //     [],
        //     () => r(require("../components/foodItem")),
        //     "foodItem"
        //   )
        require.ensure([], () => r(require("../page/App.vue")), "App")
        // require.ensure([], () => r(require("../components/submit.vue")), "submit")
        // require.ensure([],() => r(require("../page/Details.vue")), "details")//最后的'details' 给路由定义一个名字
      },
      {
        path: "/phoneIndex",
        component: r =>
          require.ensure(
            [],
            () => r(require("../components/phoneIndex.vue")),
            "phoneIndex"
          )
      },
      {
        path: "/index",
        component: r =>
          require.ensure([], () => require("../page/App.vue"), "app")
      },
      {
        path: "/signin",
        component: r =>
          require.ensure([], () => r(require("../page/Signin.vue")), "Signin")
      },
      {
        path: "/details",
        component: r =>
          require.ensure([], () => r(require("../page/details.vue")), "details")
      },
      {
        path: "/foodItem",
        component: r =>
          require.ensure([], () => r(require("../components/foodItem")), "foodItem")
      }
    ]
  }
];
