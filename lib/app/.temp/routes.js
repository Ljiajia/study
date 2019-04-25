import Vue from 'vue'
Vue.component("Bit", () => import("E:\\十二月实训一\\wangye\\demo\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-3becc616125bb",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\README.md").then(comp => {
        Vue.component("v-3becc616125bb", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1c8dee8ad8e29",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-1c8dee8ad8e29", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-61125f00dd763",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-61125f00dd763", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-8ebe766dfbf9a",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-8ebe766dfbf9a", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-bfb92ea55231e",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-bfb92ea55231e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd82c6ee16336",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-bd82c6ee16336", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a85697af2c2c2",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-a85697af2c2c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cde2b7b37ebbf",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-cde2b7b37ebbf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f593ee06c51f",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-4f593ee06c51f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df4feb5a4c69d",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-df4feb5a4c69d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-00b41dab16e87",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-00b41dab16e87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d06fe09ea802e",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d06fe09ea802e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47f68d0a7a4f2",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-47f68d0a7a4f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-e60dec6918fad",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-e60dec6918fad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8db3dbe41bcf5",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8db3dbe41bcf5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07adb13a4e7f7",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-07adb13a4e7f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e05be90837d8c",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-e05be90837d8c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-f3d9903cb83d1",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-f3d9903cb83d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-e41c7466364af",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-e41c7466364af", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-4bfd313fc948f",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-4bfd313fc948f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-f925db459b10e",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-f925db459b10e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f844c7948668",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-6f844c7948668", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b6e7c37d29323",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-b6e7c37d29323", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64605044571ea",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-64605044571ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0fd47df858ca",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c0fd47df858ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b45fa4bf3fe7",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-3b45fa4bf3fe7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73309037ad65f",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-73309037ad65f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a93b116a3f338",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a93b116a3f338", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2691f10208e1",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-a2691f10208e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f6e65aff0162",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-5f6e65aff0162", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b02c319f45ada",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-b02c319f45ada", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec98294a8e26e",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-ec98294a8e26e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e159e34d90428",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-e159e34d90428", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5f8199d84073",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-e5f8199d84073", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-15c547e498abf",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-15c547e498abf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7475d38e26602",
    path: "/zh/javascript/jstop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jstop.md").then(comp => {
        Vue.component("v-7475d38e26602", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6e0a52361194",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-f6e0a52361194", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-cd9f199c1b952",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-cd9f199c1b952", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1fa4f46e8c524",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-1fa4f46e8c524", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e8c1c8d15057b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-e8c1c8d15057b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-d3cb8deb71fd3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-d3cb8deb71fd3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2dfd0a8a527b1",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-2dfd0a8a527b1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-503bdbd44f131",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-503bdbd44f131", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6b82a674bd891",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-6b82a674bd891", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5096d27203d3",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-5096d27203d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-91029f27d928e",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-91029f27d928e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fbc67c4b7b75b",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-fbc67c4b7b75b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-9217154df5606",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-9217154df5606", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-54081f457615c",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-54081f457615c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-df6527385d72b",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-df6527385d72b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-682d57d5c7b73",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-682d57d5c7b73", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d63aa39b2524f",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-d63aa39b2524f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-0119efd9f73b",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-0119efd9f73b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-a2830d0d8a0c",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-a2830d0d8a0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8dc72f439d0a7",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-8dc72f439d0a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9cdfe45c49f9b",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-9cdfe45c49f9b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e4001bcd6f97",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-6e4001bcd6f97", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5afba6bcc283f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-5afba6bcc283f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47047de1bc56a",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-47047de1bc56a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4174c2a31aedd",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-4174c2a31aedd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49644c5fdbf7e",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-49644c5fdbf7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78b7351cfad0c",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-78b7351cfad0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-6d4117f012177",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-6d4117f012177", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ca09b534e9b5",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-9ca09b534e9b5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-f40a0a8205573",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-f40a0a8205573", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-7775123f37f0b",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-7775123f37f0b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-f132b94c65f4",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-f132b94c65f4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b6a0918808fe4",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-b6a0918808fe4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f243c25dc4a12",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-f243c25dc4a12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b9edf6af8992",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-6b9edf6af8992", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64c1b3fa3c596",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-64c1b3fa3c596", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]