<template>
  <div>
    <component :is='currentTab' :tasks="taskArray" @taskAdded="addTask"></component>
  </div>
  <button @click="changeCurrent">Cambia!</button>
</template>

<script>
export default {
  data(){
    return{
      currentTab: "Home",
      taskArray: []
    }
  },
  methods: {
    changeCurrent(){
      if (this.currentTab == "AddTask") {
        this.currentTab = "TaskList"
      } else {
        this.currentTab= "AddTask"
      }
    },
    addTask(task){
      this.taskArray.push(task);
    }
  },
};
</script>

<style scoped>
/* Opcional: Estilos para tu componente */
</style>
