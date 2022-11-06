import { createWebHistory, createRouter } from "vue-router"

import About from "@/views/about/About"
import Home from '@/views/home/Home'
import Imprint from '@/views/imprint/Imprint'
import Projects from "@/views/projects/Projects"

const routes = [
  { path: "/", name: "Home", component: Home },

  { path: "/about", name: "About", component: About },
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
