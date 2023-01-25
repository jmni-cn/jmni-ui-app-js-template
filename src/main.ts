import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import JmniUI from "jmni-ui-vite";
import "jmni-ui-vite/assets/style.css";

createApp(App)
    .use(JmniUI).mount('#app')
