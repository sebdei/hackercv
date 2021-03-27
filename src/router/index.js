import { createWebHistory, createRouter } from "vue-router"

import About from "@/views/about/About"
import Projects from "@/views/projects/Projects"

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router