import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import i18n from './i18n';
import './interceptors/axios';


createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')