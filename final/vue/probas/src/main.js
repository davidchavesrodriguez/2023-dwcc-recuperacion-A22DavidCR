import { createApp } from "vue";
import App from "./App.vue";

import Home from "./components/Home.vue"
import DarthMaul from "./components/DarthMaul.vue"
import AddTask from "./components/AddTask.vue"
import TaskList from "./components/TaskList.vue"
const app = createApp(App);
app.component("Home", Home);
app.component("DarthMaul", DarthMaul);
app.component("AddTask", AddTask);
app.component("TaskList", TaskList);
app.mount("#app");
