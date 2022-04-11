<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light my-5">
      <div class="container">
        <router-link :to="{ name: 'Home' }">
          <h1>{{ content.headline }}</h1>
        </router-link>

        <div
          id="button"
          ref="button"
          :class="mode"
          @click="toggleMobileNav"
        >
          <span />
        </div>

        <div class="collapse navbar-collapse">
          <div class="d-flex flex-grow-1 justify-content-end">
            <ul class="navbar-nav mb-lg-0">
              <li v-for="view in views" :key="view">
                <router-link class="nav-link" :to="{ name: view }">
                  {{ view }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div id="mobileNavOverlay" ref="mobileNavOverlay" :class="mode">
    <div class="blur" />
    <ul class="mb-lg-0">
      <li v-if="renderHomeItemInMobileNav">
        <router-link
          class="nav-link"
          :to="{ name: 'Home' }"
          :class="{
            active: 'Home' === currentRoute,
          }"
          @click="toggleMobileNav"
        >
          {{ "Home" }}
        </router-link>
      </li>
      <li v-for="view in views" :key="view">
        <router-link
          class="nav-link"
          :to="{ name: view }"
          :class="{
            active: view === currentRoute,
          }"
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
    props: {
      /**
       * As the top left h1-title in the navigation is not reachable within the mobile navigation overlay, you
       * may want to additionally render a navigation item for the "Home" route in the mobile navigation overlay.
       *
       * Defaults to true.
       */
      renderHomeItemInMobileNav: {
        type: Boolean,
        default: true,
      },
      /**
       * You can choose between a light mode and a dark mode.
       * For now, the mode only applies to the mobile navigation overlay.
       *
       * Defaults to "light".
       */
      mode: {
        type: String,
        validator: (value) => ["light", "dark"].includes(value),
        default: "light",
      },
    },
    data: function () {
      return {
        isMobileNavActive: false,
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
    watch: {
      /** Disables scrolling while mobile navigation overlay is shown. */
      isMobileNavActive: function (currentValue) {
        document.documentElement.style.overflow = currentValue
          ? "hidden"
          : "auto"
      },
    },
    methods: {
      toggleMobileNav: function () {
        this.$refs.button.classList.toggle("active")
        this.$refs.mobileNavOverlay.classList.toggle("active")
        this.isMobileNavActive = !this.isMobileNavActive
      },
    },
  }
</script>

<style scoped lang="scss">
  @media (min-width: 992px) {
    #button,
    #mobileNavOverlay {
      display: none;
    }
  }

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
