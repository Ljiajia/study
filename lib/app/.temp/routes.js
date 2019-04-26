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
    name: "v-4bfce046dd9da",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\README.md").then(comp => {
        Vue.component("v-4bfce046dd9da", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-9c2f2c463f911",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-9c2f2c463f911", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-66e1fe6a9ffa9",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-66e1fe6a9ffa9", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-957cadf4a15b2",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-957cadf4a15b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-ea55688d13d4b",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-ea55688d13d4b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-45fbf9dbf8cd9",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-45fbf9dbf8cd9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1961a2783506a",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-1961a2783506a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cfd82405eeb3b",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-cfd82405eeb3b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e09eac6385c34",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-e09eac6385c34", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b7910ee26bfb",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-8b7910ee26bfb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4728b3329cc0c",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-4728b3329cc0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d129d47fc982",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-5d129d47fc982", comp.default)
        next()
      })
    }
  },
  {
    name: "v-70f762ca08bf2",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-70f762ca08bf2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-7fdca4ef9d7ae",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-7fdca4ef9d7ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a16f5ef39657a",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-a16f5ef39657a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f0cc8551c69e",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-3f0cc8551c69e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8685062d63a9e",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-8685062d63a9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-6108d73bf9fd6",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-6108d73bf9fd6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-2d082f1d21be8",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-2d082f1d21be8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-9c6bab1e6986c",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-9c6bab1e6986c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-6b57d9fd54015",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-6b57d9fd54015", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28042ae21e704",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-28042ae21e704", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82ea2a71ecf8e",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-82ea2a71ecf8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3e5c9839a04a5",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-3e5c9839a04a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49e3cae941088",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-49e3cae941088", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86e96ef4fb968",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-86e96ef4fb968", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed6620602b68d",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-ed6620602b68d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-00d6d4be19f6c",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-00d6d4be19f6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f1150c3796c",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-9f1150c3796c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef2992ceb0b46",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-ef2992ceb0b46", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4922afff2217c",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4922afff2217c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79454c32e571f",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-79454c32e571f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2fab0a7808ec",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-d2fab0a7808ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-261546214f901",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-261546214f901", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-6de22642a0613",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-6de22642a0613", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e4429690aa57",
    path: "/zh/javascript/jstop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\javascript\\jstop.md").then(comp => {
        Vue.component("v-8e4429690aa57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42a5eb37c5668",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-42a5eb37c5668", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-ca0e31c8470f6",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-ca0e31c8470f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-320f383e722e3",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-320f383e722e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-37eb2c120d1bf",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-37eb2c120d1bf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-cf5baf9619b15",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-cf5baf9619b15", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-18a03d00b3616",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-18a03d00b3616", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-a15e416cad6d9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-a15e416cad6d9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-0725ccfa05646",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-0725ccfa05646", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85d225bd3bb6b",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-85d225bd3bb6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68a8724c9d69d",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-68a8724c9d69d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24462889dbbda",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-24462889dbbda", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-fcc46f74b3cf2",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-fcc46f74b3cf2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-9e5b9c6861057",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-9e5b9c6861057", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b10671e04813",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-b10671e04813", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-d73f6fb5ea233",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-d73f6fb5ea233", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68c3218cba12a",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-68c3218cba12a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-ac7047afbc21f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-ac7047afbc21f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-478dfa8ddd333",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-478dfa8ddd333", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4641985120a6c",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-4641985120a6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-978fe2298e564",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-978fe2298e564", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e95f3e3165a",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-1e95f3e3165a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f05bcb38751f5",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-f05bcb38751f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4805bbed7ff2",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-f4805bbed7ff2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-23b1d9c326477",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-23b1d9c326477", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2fc72401089a8",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-2fc72401089a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5b4db10f5288",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-a5b4db10f5288", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-43c3836ec9335",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-43c3836ec9335", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88ad6a2c4566b",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-88ad6a2c4566b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-1e7f6c1b44b51",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-1e7f6c1b44b51", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-6a0c5d5b0784b",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-6a0c5d5b0784b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-7747392603512",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-7747392603512", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-c0587a6108fd3",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-c0587a6108fd3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a922f34576721",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-a922f34576721", comp.default)
        next()
      })
    }
  },
  {
    name: "v-27068488879fb",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-27068488879fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b8d29fb0299",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\十二月实训一\\wangye\\demo\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-7b8d29fb0299", comp.default)
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