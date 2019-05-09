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
    name: "v-211576ffdea98",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\README.md").then(comp => {
        Vue.component("v-211576ffdea98", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4e9c11629b5e9",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-4e9c11629b5e9", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-28be6604c2253",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-28be6604c2253", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-4b5b6adde54ef",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-4b5b6adde54ef", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-b173932b488a1",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-b173932b488a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97e6916071d64",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-97e6916071d64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4c4109652e79",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-b4c4109652e79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55cda06eaab1b",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-55cda06eaab1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-633313841f314",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-633313841f314", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c15c57106e022",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-c15c57106e022", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de451702e79f8",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-de451702e79f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2de9c65e07c04",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-2de9c65e07c04", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76bfbea5b7cb3",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-76bfbea5b7cb3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-cff1548c96f2f",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-cff1548c96f2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6bbf3e16f157f",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-6bbf3e16f157f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63982879871ee",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-63982879871ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a494edcc11f9",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-4a494edcc11f9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-0b4323c953e72",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-0b4323c953e72", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-7e202278486ec",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-7e202278486ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-000b20e0c9444",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-000b20e0c9444", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-01ef7af6743a9",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-01ef7af6743a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-882f5cf190bcb",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-882f5cf190bcb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c66675281c75",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-2c66675281c75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32b5599ac28e9",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-32b5599ac28e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c91c1b7f771c7",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c91c1b7f771c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dff4d45daec1a",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-dff4d45daec1a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d64e578066651",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-d64e578066651", comp.default)
        next()
      })
    }
  },
  {
    name: "v-733b3aaf7b4b1",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-733b3aaf7b4b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cbe4326049016",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-cbe4326049016", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1fdf7759e05c8",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-1fdf7759e05c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f11bf8cd58d86",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-f11bf8cd58d86", comp.default)
        next()
      })
    }
  },
  {
    name: "v-efdd5f402d6f3",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-efdd5f402d6f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4818cfbc6c9c5",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-4818cfbc6c9c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-709f7839c4bf2",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-709f7839c4bf2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-4f5afa70f7c67",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-4f5afa70f7c67", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a54c278415e27",
    path: "/zh/javascript/jsbottom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jsbottom.md").then(comp => {
        Vue.component("v-a54c278415e27", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7fa7662b47f09",
    path: "/zh/javascript/jstop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jstop.md").then(comp => {
        Vue.component("v-7fa7662b47f09", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a1f2d43b17e1",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-3a1f2d43b17e1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-2d1d2722b5833",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-2d1d2722b5833", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab28c5929607f",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-ab28c5929607f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-67796dddd3f31",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-67796dddd3f31", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-e950f7654259a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-e950f7654259a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-cefccb2dca371",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-cefccb2dca371", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-e86c3e2d18ca9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-e86c3e2d18ca9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-b803e8c9482eb",
    path: "/zh/react/Diff%E7%AE%97%E6%B3%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Diff算法.md").then(comp => {
        Vue.component("v-b803e8c9482eb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/Diff算法.html",
    redirect: "/zh/react/Diff%E7%AE%97%E6%B3%95.html"
  },
  {
    name: "v-5ddd0fe71f9b6",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-5ddd0fe71f9b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-607a9881dc173",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-607a9881dc173", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0b5e7c230f7a",
    path: "/zh/react/Props%E5%92%8Cstate.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Props和state.md").then(comp => {
        Vue.component("v-e0b5e7c230f7a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/Props和state.html",
    redirect: "/zh/react/Props%E5%92%8Cstate.html"
  },
  {
    name: "v-08b22e6126abd",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-08b22e6126abd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-c1cfe93f3001c",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-c1cfe93f3001c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-b66c51fad4289",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-b66c51fad4289", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-aeef257a348ab",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-aeef257a348ab", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-3df1b4a8d3599",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-3df1b4a8d3599", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c5cc648e4e2dd",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-c5cc648e4e2dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-15efc723b21bf",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-15efc723b21bf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-cc6a5f049f1f7",
    path: "/zh/react/%E8%99%9A%E6%8B%9FDOM%E5%92%8C%E7%9C%9F%E5%AE%9EDOM%E5%85%B3%E7%B3%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\虚拟DOM和真实DOM关系.md").then(comp => {
        Vue.component("v-cc6a5f049f1f7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/虚拟DOM和真实DOM关系.html",
    redirect: "/zh/react/%E8%99%9A%E6%8B%9FDOM%E5%92%8C%E7%9C%9F%E5%AE%9EDOM%E5%85%B3%E7%B3%BB.html"
  },
  {
    name: "v-29431d38ea5ed",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-29431d38ea5ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-9ea5a100013f1",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-9ea5a100013f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-661bd42c349cd",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-661bd42c349cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-907ec7e1f0a2f",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-907ec7e1f0a2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-790ef2a40d64f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-790ef2a40d64f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e6986c9913f8",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-8e6986c9913f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-309935c77998d",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-309935c77998d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-27fd0af842cb2",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-27fd0af842cb2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-abe26921f94d3",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-abe26921f94d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-efd6be9b7b7",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-efd6be9b7b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a773c4b8abbfc",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-a773c4b8abbfc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-c9d9a21c4fca",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-c9d9a21c4fca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-521592e575bbe",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-521592e575bbe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-7a11e86a48fde",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-7a11e86a48fde", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-97f1dde7be36b",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-97f1dde7be36b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-888b8954a47c5",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-888b8954a47c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d2bcf5efbab3",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-3d2bcf5efbab3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a604f4748dde",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-8a604f4748dde", comp.default)
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