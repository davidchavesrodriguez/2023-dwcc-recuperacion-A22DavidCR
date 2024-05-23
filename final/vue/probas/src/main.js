import { createApp } from "vue";
import App from "./App.vue";

import FoodItem from "./components/FoodItem.vue";
import TextoMayusculas from "./components/TextoMayusculas.vue";
import Person from "./components/Persona.vue";
const app = createApp(App);
app.component("FoodItem", FoodItem);
app.component("TextoMayusculas", TextoMayusculas);
app.component("Persona", Person);
app.mount("#app");
