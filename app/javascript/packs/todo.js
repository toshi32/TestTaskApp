import Vue from 'vue/dist/vue.esm.js'
import Header from './components/header.vue'
import Index from './components/index.vue' // 追加

var app = new Vue({
  el: '#app',
  components: {
    'navbar': Header,
    'contents' : Index // 追加
  }
});