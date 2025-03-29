import { createApp } from 'vue'
import App from './App.vue'


//Importacion de paquetes bases
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


//Importacion de Componentes
import Button from "primevue/button"
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';




const app = createApp(App).use(router)
app.use(VueAxios, axios);

//Uso de componentes

app.component('ButtonPrime', Button);
app.component('DialogPrime', Dialog);
app.component('ImagePrime', Image);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
export {app}
