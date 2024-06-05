<script>
import TaskList from './components/TaskList.vue';

export default {
  data() {
    return {
      currentTab: "",  
      taskValue: "",
      taskArray: [],
    };
  },
  methods: {
    showHomePage() {
      this.currentTab = "HomePage";
    },
    showAddTask() {
      this.currentTab = "AddTask";
    },
    showTaskList() {
      this.currentTab = "TaskList";
    },
    showOutra() {
      this.currentTab = "Outra";
    },
    getInputValue(taskValue) {
      this.taskArray.push(taskValue);
      this.currentTab= "TaskList"
        },
  },
};
</script>

<template>
  <header>
    <ul>
      <li @click="showHomePage">Homepage</li>
      <li @click="showAddTask">Add Tasks</li>
      <li @click="showTaskList">TaskList</li>
      <li @click="showOutra">Outra</li>
    </ul>
  </header>
  <h1>A miña aplicación de probas</h1>
  <component :is="currentTab" @addTaskEvent="getInputValue" :taskArray= "taskArray"></component>
</template>

<style>
header {
  background-color: lightcoral;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

li {
  border: 2px solid black;
  padding: 1px;
  font-size: larger;
  cursor: crosshair;
}
</style>
