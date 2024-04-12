import Vue from 'vue'
import copy from './copy' // 引入指令
import expandClick from './expandClick' // 引入指令
import screenfull from './screenfull' // 引入指令
// import other directives

const directives = {
  copy,
  expandClick,
  screenfull,
  // other directives
}

Object.keys(directives).forEach(name => Vue.directive(name, directives[name]))