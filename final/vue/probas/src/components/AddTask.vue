<script>
export default {
  data() {
    return {
      taskValue: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("taskAdded", this.taskValue);
      this.taskValue = "";
    },
  },
};
</script>
<template>
  Add somethig:
  <input type="text" v-model="taskValue" />
  <button @click="addTask">Add Task</button>
</template>
