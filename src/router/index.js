import { createWebHistory, createRouter } from "vue-router"

import About from "@/views/about/About"
import Blog from "@/views/blog/Blog"
import BlogDetails from "@/views/blog/BlogDetails"
import Home from '@/views/home/Home'
import Imprint from '@/views/imprint/Imprint'
import Projects from "@/views/projects/Projects"

const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/about", name: "About", component: About },

  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:fileName", name: "BlogDetails", component: BlogDetails },

  { path: "/imprint", name: "Imprint", component: Imprint },
  
  { path: "/projects", name: "Projects", component: Projects }
]

const scrollBehavior = function (to, from, savedPosition) {
  return savedPosition || { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
