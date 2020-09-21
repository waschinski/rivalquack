const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/rules", component: () => import("pages/Rules.vue") },
      { path: "/info", component: () => import("pages/Info.vue") },
    ],
  },
]

routes.push({
  path: "*",
  component: () => import("pages/Error404.vue"),
})

export default routes
