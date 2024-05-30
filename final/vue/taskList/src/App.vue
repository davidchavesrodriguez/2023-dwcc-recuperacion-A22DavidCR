<script>
export default {
  data() {
    return {
      activeTab: "AddTask",
      addTaskValue: ""
    }
  },
  methods: {
    showDogs() {
      this.activeTab = "Dogs"
    },
    showAddTask() {
      this.activeTab = "AddTask"
    },
    showTaskList() {
      this.activeTab = "TaskList"
    },
    addTaskEvent() {
      console.log(this.addTaskValue);
    },
    updateTaskValue(newValue) {
      this.addTaskValue = newValue; // Actualiza addTaskValue con el nuevo valor emitido desde el hijo
    }
  },
}
</script>

<template>
  <button @click="showAddTask">Add task</button>
  <button @click="showTaskList">Task list</button>
  <button @click="showDogs">Dogs</button>
  <!-- El evento @update:addTaskValue se maneja en el método updateTaskValue -->
  <component :is='activeTab' @add-task="addTaskEvent" @update:addTaskValue="updateTaskValue"></component>
</template>

<style scoped></style>
