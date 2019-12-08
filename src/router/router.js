import APP from "../App.vue"
export default [
  {
    path: "/",
    component: APP,
    children: [
      {
        path: "",
        component: r =>
          // require.ensure([], () => r(require("../page/App.vue")), "App")
          require.ensure([],() => r(require("../page/Details.vue")), "details")//最后的'details' 给路由定义一个名字
      },
      // {
      //   path: "/item",
      //   component: r =>
      //     require.ensure([], () => r(require("../page/item")), "item")
      // },
      // {
      //   path:"/details",
      //   component:r =>
      //     require.ensure([],() => r(require("../components/details.vue")), "details")
      // }
    ]
  }
];