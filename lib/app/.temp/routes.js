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
    name: "v-a4c1eb4b4c0dd",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\README.md").then(comp => {
        Vue.component("v-a4c1eb4b4c0dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-67f1655d0fa6a",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-67f1655d0fa6a", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-a30e4bc5c4c13",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-a30e4bc5c4c13", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-f3e1b7822b898",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-f3e1b7822b898", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-70b1d5b76ca1b",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-70b1d5b76ca1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85b8fdc87d9ea",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-85b8fdc87d9ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a6eea6ae53f47",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-a6eea6ae53f47", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57d4297819ab9",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-57d4297819ab9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a8467ff7e0c8b",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-a8467ff7e0c8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a368722e2000b",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-a368722e2000b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5460dc339bb7e",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-5460dc339bb7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89dacdb48a412",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-89dacdb48a412", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e0e013002d95",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-8e0e013002d95", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-0dcc4018d1cf4",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-0dcc4018d1cf4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fcd482f64a5c",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8fcd482f64a5c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-521aeaa76b806",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-521aeaa76b806", comp.default)
        next()
      })
    }
  },
  {
    name: "v-669b47ba08569",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-669b47ba08569", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-105683f61227f",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-105683f61227f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-794a71983e08a",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-794a71983e08a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-c26d2f6486425",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-c26d2f6486425", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-1ea8104eac4c9",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-1ea8104eac4c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-485677b18fcfd",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-485677b18fcfd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-568154597ad26",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-568154597ad26", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dffd2b5d59edf",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-dffd2b5d59edf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a44c2e58d493",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-1a44c2e58d493", comp.default)
        next()
      })
    }
  },
  {
    name: "v-916679381e0bf",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-916679381e0bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2e303caac2d9",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-b2e303caac2d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83d078bba7895",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-83d078bba7895", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7bc41eb5f8165",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-7bc41eb5f8165", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8e2a07e48d3f",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-b8e2a07e48d3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cdc667d745b3",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-cdc667d745b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81a3d1e1394d2",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-81a3d1e1394d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33ed7105360b7",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-33ed7105360b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-23c76af2c9461",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-23c76af2c9461", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-f98d85e8e46fb",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-f98d85e8e46fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51f74b0c4b307",
    path: "/zh/javascript/jstop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jstop.md").then(comp => {
        Vue.component("v-51f74b0c4b307", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b681d5cc2aa2c",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-b681d5cc2aa2c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-1f96ef880790b",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-1f96ef880790b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97688d9fbbe1d",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-97688d9fbbe1d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-eecbe6ebc166c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-eecbe6ebc166c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-9e9609731a634",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-9e9609731a634", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-12c8c0c6e660d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-12c8c0c6e660d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-6bf9ea12de727",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-6bf9ea12de727", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-053f0555e10e9",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-053f0555e10e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd582d3cbcbeb",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-fd582d3cbcbeb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-daf5b6319d9b",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-daf5b6319d9b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1dd50e77a4b35",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-1dd50e77a4b35", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-d497355882cad",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-d497355882cad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-614987473aeb3",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-614987473aeb3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-aeb87c331b428",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-aeb87c331b428", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-da94e329c093",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-da94e329c093", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56a374395230a",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-56a374395230a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-b18cf47704beb",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-b18cf47704beb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-c05a1233f97c8",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-c05a1233f97c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0cf843ff086b4",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-0cf843ff086b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7de05557ffe56",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-7de05557ffe56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a549f008cad3",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-4a549f008cad3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04788b6c85003",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-04788b6c85003", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6098d4ad91435",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-6098d4ad91435", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b84d37c4c8ab",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-9b84d37c4c8ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57a5184b4b2c8",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-57a5184b4b2c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18cb1cbd25149",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-18cb1cbd25149", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-9a100fb6571a7",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-9a100fb6571a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0171db015cf5c",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-0171db015cf5c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-8563a3bf67a46",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-8563a3bf67a46", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-9e573dadc5ebb",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-9e573dadc5ebb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-9157f50c94e24",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-9157f50c94e24", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-7eefc92342975",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-7eefc92342975", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-1cc63ba90efc2",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-1cc63ba90efc2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-763605d4cd00e",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-763605d4cd00e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dc4019139a92e",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-dc4019139a92e", comp.default)
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