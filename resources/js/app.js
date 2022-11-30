import './bootstrap';
import '@mdi/font/css/materialdesignicons.css';

import App from './page/App.vue';

import router from './router';
import { createApp } from 'vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify(
    {
        components,
        directives,
    }
);



createApp(App).use(vuetify).use(router).mount('#app');


