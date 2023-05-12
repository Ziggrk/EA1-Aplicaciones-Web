import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//PrimeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import  i18n from '../src/locales/i18n'
import router from "@/router";

const app = createApp(App);

app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-check-box',Checkbox);
app.component('pv-card',Card);
app.component('pv-table', DataTable);
app.component('pv-column', Column);
app.use(i18n);
app.use(router);
app.use(PrimeVue);


app.mount('#app');
