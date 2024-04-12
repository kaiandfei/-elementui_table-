//index.js
import Vue from 'vue'
import VueI18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    ...enLocale,
  },
  zh: {
    ...zh,
    ...zhLocale,
  }
};

// const language = (navigator.language || "zh").toLocaleLowerCase(); //获取浏览器语言
// 中文版本
const language = 'zh'
const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || language.split("-")[0] || "zh",
  fallbackLocale: "zh", //备用语言
  messages
});
ElementLocale.i18n((key, value) => i18n.t(key, value))

// 后用
export const changeLang = (lang) => {
  i18n.locale = lang;//修改全局的语言
  ElementLocale.i18n((key, value) => i18n.t(key, value))
  localStorage.setItem('lang', lang);//修改本地缓存的语言
}

export default i18n;