import { createApp } from "vue";
import App from "./App.vue";
import Dogs from "./components/Dogs.vue";
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";

const app = createApp(App);
app.component("Dogs", Dogs);
app.component("AddTask", AddTask);
app.component("TaskList", TaskList);
app.mount("#app");
