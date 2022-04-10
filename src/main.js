import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faVuejs)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
