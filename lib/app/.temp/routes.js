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
    name: "v-573fa5eaef0c",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\README.md").then(comp => {
        Vue.component("v-573fa5eaef0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c535bf9c2fd74",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-c535bf9c2fd74", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-9a03aacaf0f7b",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-9a03aacaf0f7b", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-304182b5ad6f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-304182b5ad6f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-21862d91a3143",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-21862d91a3143", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f124d7f68ca36",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-f124d7f68ca36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-509426d1adb76",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-509426d1adb76", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86525a8fbc237",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-86525a8fbc237", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e24282bc8b92",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-4e24282bc8b92", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ecfe0c9e2a9d",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-2ecfe0c9e2a9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c0d6a0a2f278",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-2c0d6a0a2f278", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d9bc432d0e296",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d9bc432d0e296", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b6d79e475f758",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-b6d79e475f758", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-e02b29fe1437a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-e02b29fe1437a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a848c4783a8a",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-4a848c4783a8a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e92a2505db7d2",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-e92a2505db7d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4fa86391293d",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-d4fa86391293d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-ff81c19ffd972",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-ff81c19ffd972", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-fbe786545ab09",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-fbe786545ab09", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-416a1f896b997",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-416a1f896b997", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-2e537c31d6ca3",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-2e537c31d6ca3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a349e58c2cb05",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-a349e58c2cb05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bfa365d69a7d",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-2bfa365d69a7d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a33eabb7e492",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-6a33eabb7e492", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8796c668de859",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8796c668de859", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e82e5a5bf77cf",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-e82e5a5bf77cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e874c71650bc9",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-e874c71650bc9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5b55845772be",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a5b55845772be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4a16992c9fc7",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-b4a16992c9fc7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca98fb569f5f5",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-ca98fb569f5f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ea4a5d8d7c96",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-1ea4a5d8d7c96", comp.default)
        next()
      })
    }
  },
  {
    name: "v-061618226e72e",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-061618226e72e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-660245044876d",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-660245044876d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c77eb7d16cf52",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-c77eb7d16cf52", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-97c59668d229e",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-97c59668d229e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fef0c517052fc",
    path: "/zh/javascript/jstop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jstop.md").then(comp => {
        Vue.component("v-fef0c517052fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9a7b299d943e6",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-9a7b299d943e6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-e609850d84baf",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-e609850d84baf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-583435e015ec8",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-583435e015ec8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-6007cdd6250a6",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-6007cdd6250a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-0f59cff803581",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-0f59cff803581", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-63ab1663c3ef5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-63ab1663c3ef5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-5e24f9efbb62",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-5e24f9efbb62", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-bc0ea083beb2f",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-bc0ea083beb2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1d017e072849",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-f1d017e072849", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fa9c287383bf9",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-fa9c287383bf9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5b45e5de5fbd",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-b5b45e5de5fbd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-e473a2d02e284",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-e473a2d02e284", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-1824d2d56a502",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-1824d2d56a502", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8f18f74868bd9",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-8f18f74868bd9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e197cf6b0a861",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-e197cf6b0a861", comp.default)
        next()
      })
    }
  },
  {
    name: "v-130dae7d0c332",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-130dae7d0c332", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-0746bba141857",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-0746bba141857", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-b79c9d8a3dae4",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-b79c9d8a3dae4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-50752fc14b168",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-50752fc14b168", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f727be98e4e2",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-7f727be98e4e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c592d8c4e5123",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-c592d8c4e5123", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9da6a2b07a977",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-9da6a2b07a977", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b6e4bcc0f16f7",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-b6e4bcc0f16f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34a018326e2ce",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-34a018326e2ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65f9a4bd68a71",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-65f9a4bd68a71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b22807025487d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-b22807025487d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-3465d36abd146",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-3465d36abd146", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed18b449c9c76",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-ed18b449c9c76", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-d257da526af3e",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-d257da526af3e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-2b47b0beb623",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-2b47b0beb623", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-0b99c1611a15c",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-0b99c1611a15c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1a7fc76ec69b7",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-1a7fc76ec69b7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-7fa42aa1ffe05",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-7fa42aa1ffe05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd3a8ed1892df",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-fd3a8ed1892df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de3f9b475e698",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-de3f9b475e698", comp.default)
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