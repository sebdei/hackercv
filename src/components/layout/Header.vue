<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container">
        <router-link :to="{ name: 'Home' }">
          <h1>{{ content.headline }}</h1>
        </router-link>

        <div
          id="button"
          :class="{ active: isMobileNavActive }"
          class="dark d-lg-none"
          @click="toggleMobileNav"
        >
          <span />
        </div>

        <div class="collapse navbar-collapse">
          <div class="d-flex flex-grow-1 justify-content-end">
            <ul class="navbar-nav mb-lg-0">
              <li
                v-for="view in views"
                :key="view"
              >
                <router-link
                  class="nav-link"
                  :to="{ name: view }"
                >
                  {{ view }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div
    id="mobileNavOverlay"
    :class="{ active: isMobileNavActive }"
    class="dark d-lg-none"
    @scroll.prevent
    @touchmove.prevent
    @wheel.prevent
  >
    <div class="blur" />

    <ul class="mb-lg-0">
      <li>
        <router-link
          :class="{ 'active': 'Home' === currentRoute }"
          :to="{ name: 'Home' }"
          class="nav-link"
          @click="toggleMobileNav"
        >
          {{ "Home" }}
        </router-link>
      </li>
      <li v-for="view in views" :key="view">
        <router-link
          :class="{ 'active': view === currentRoute }"
          :to="{ name: view }"
          class="nav-link"
          @click="toggleMobileNav"
        >
          {{ view }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import content from "@/ressources/components/layout/header.json"

export default {
  data: function () {
    return {
      isMobileNavActive: false
    }
  },
  computed: {
    views: function () {
      return ["About", "Projects", "Blog"]
    },
    currentRoute: {
      get() {
        return this.$route.name
      },
    },
    content: function () {
      return content
    },
  },
  methods: {
    toggleMobileNav: function () {
      this.isMobileNavActive = !this.isMobileNavActive
    }
  }
}
</script>

<style scoped lang="scss">
.light {
  &#button.active {
    span {
      &:before,
      &:after {
        background-color: #999;
      }
    }
  }

  &#mobileNavOverlay {
    .blur {
      background: white;
    }
    ul li {
      color: #999;
      a {
        &.active {
          color: #eee;
        }
        &:hover {
          color: #eee;
        }
      }
    }
  }
}

.dark {
  &#button.active {
    span {
      &:before,
      &:after {
        background-color: white;
      }
    }
  }

  &#mobileNavOverlay {
    .blur {
      background: black;
    }
    ul li {
      color: white;
      a {
        &.active {
          color: #999;
        }
        &:hover {
          color: #999;
        }
      }
    }
  }
}

#button {
  width: 35px;
  height: 25px;
  cursor: pointer;
  transform: translateX(0);
  z-index: 999;

  span {
    top: 10px;
    transition: all 50ms ease-out;

    &:before,
    &:after {
      transition: all 250ms ease-out;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }

  span,
  span:before,
  span:after {
    position: absolute;
    display: block;
    height: 3px;
    width: 35px;
    content: "";
    cursor: pointer;
    background: #999;
  }

  &.active {
    span {
      background-color: transparent;
      &:before,
      &:after {
        top: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
}

#mobileNavOverlay {
  position: absolute;
  z-index: -1;
  transition: all ease 0.3s;

  &,
  .blur {
    opacity: 0;
    height: 100vh;
    width: 100vw;
  }

  &.active {
    display: block;
    z-index: 800;
    opacity: 1;
    .blur {
      opacity: 0.9;
    }
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    list-style-type: none;
    transform: translateX(-50%) translateY(-50%);
    li {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.5em;
      text-align: center;
      a {
        transition: color ease 0.2s;
      }
    }
  }
}
</style>
