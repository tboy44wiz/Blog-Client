import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//  Import '@iconify/vue'.
// import { Icon } from '@iconify/vue';

//  Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//  Default Style
import './assets/styles/_Style.scss';

const app = createApp(App);
// app.component("Icon", Icon);
app.use(store);
app.use(router);
app.mount('#app');
