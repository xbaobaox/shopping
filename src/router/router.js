import APP from "../App.vue"
import Details from "../page/Details.vue"
export default [
  {
    path: "/",
    component: APP,
    children: [
      {
        path: "",
        component: r =>
          // require.ensure([], () => r(require("../page/App.vue")), "App")
          require.ensure([],() => r(require("../page/Details.vue")), "details")
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