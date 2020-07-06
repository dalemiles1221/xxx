import Vue from 'vue'
import App from './App.vue'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import videojs from 'video.js'
window.videojs = videojs
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

Vue.use(VideoPlayer)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
