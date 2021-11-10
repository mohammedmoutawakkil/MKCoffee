import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//fontawesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//fontawesome JS 
import { library } from '@fortawesome/fontawesome-svg-core'
//fontawesome icons
import { fas } from '@fortawesome/free-solid-svg-icons'
//brands icons
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab);
//bootstrap
import 'bootstrap/scss/bootstrap.scss'
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

createApp(App).use(router, Tooltip, Toast, Popover).component('fa', FontAwesomeIcon).mount('#app');