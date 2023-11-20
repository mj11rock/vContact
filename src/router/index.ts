import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddView.vue"),
    }
  ],
});
router.beforeEach((to, _from, next) => {
  if(to.fullPath === "/edit" && !to.params.id) {
    router.push({name: "home"})
  } else {
    next()
  }
})

export default router;
