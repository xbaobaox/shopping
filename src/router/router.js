import App from "../App";

export default [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "",
        component: r =>
          require.ensure([], () => r(require("../page/App.vue")), "App")
      },
      {
        path: "/item",
        component: r =>
          require.ensure([], () => r(require("../page/item")), "item")
      },
      {
        path:"/details",
        component:r =>
          require.ensure([],() => r(require("../components/details.vue")), "details")
      }
    ]
  }
];