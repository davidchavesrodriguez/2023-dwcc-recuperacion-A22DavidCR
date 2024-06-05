import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './components/Homepage.vue';
import AddTask from "./components/AddTask.vue";
import TaskList from './components/TaskList.vue';

const app = createApp(App);
app.component('HomePage', HomePage);
app.component("AddTask", AddTask);
app.component("TaskList", TaskList);
app.mount('#app');