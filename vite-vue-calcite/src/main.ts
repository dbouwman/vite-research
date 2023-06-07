import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(location.href);
createApp(App).mount("#app");
