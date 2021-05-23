import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "./assets/style.css";
import "./assets/tailwind.css"
createApp(App).use(Antd).mount('#app')
