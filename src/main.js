// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

const vuetify = createVuetify(); // Vuetify instance

createApp(App).use(vuetify).mount('#app'); // Mount the Vue app with Vuetify
