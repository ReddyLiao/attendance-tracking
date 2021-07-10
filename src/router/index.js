import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Navigation",
    component: () => import("@/views/Navigation.vue"),
    redirect: "/punch",
    children: [
      {
        path: "punch",
        name: "Punch",
        component: () => import("../components/Punch.vue"),
      },
      {
        path: "requests",
        name: "Requests",
        component: () => import("../components/Requests.vue"),
      },
      {
        path: "record",
        name: "Record",
        redirect: "/record/dailyRecord",
        component: () => import("../components/Record.vue"),
        children: [
          {
            path: "report",
            name: "Report",
            component: () => import("../components/Report.vue"),
          },
          {
            path: "dailyRecord",
            name: "DailyRecord",
            component: () => import("../components/DailyRecord.vue"),
          },
        ],
      },
      {
        path: "setting",
        name: "Setting",
        component: () => import("../components/Setting.vue"),
      },
    ],
  },
  {
    path: "/signinRegister",
    name: "SigninRegister",
    component: () => import("@/views/SigninRegister.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to) => {
  const token = localStorage.getItem("transaction");
  if (to.meta.requireAuth) {
    if (!token) {
      router.push("/signIn");
    }
  }
});
export default router;
