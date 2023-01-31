import { createApp } from 'vue'
import App from './App.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide }
  }

createApp(App).mount('#app')
