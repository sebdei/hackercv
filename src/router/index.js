import { createWebHistory, createRouter } from "vue-router"

import About from "@/views/about/About"
import Blog from "@/views/blog/Blog"
import Projects from "@/views/projects/Projects"

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router