import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

const app = createApp(App)

app.use(router)
app.use(VueGoogleMaps, {
    load: {
        // key: 'AIzaSyAKBzSd9_aZR-wEYfWgTlNgBoZnkdu23Xs',
        key:"AIzaSyC4Wf6YgqgaqXtaHACUYyhlRNtMutMPHuk"
  
    },
  })
app.use(createPinia())



// const app =app.use(router).use(createPinia()).use(VueGoogleMaps, {
//     load: {
//         // key: 'AIzaSyAKBzSd9_aZR-wEYfWgTlNgBoZnkdu23Xs',
//         key:"AIzaSyC4Wf6YgqgaqXtaHACUYyhlRNtMutMPHuk"
  
//     },
//   });
globalComponents(app);
utils(app);
app.mount("#app");
