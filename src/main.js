import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import "@/utils";

import components from "@/components/UI";

let app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

app.mount("#app");
