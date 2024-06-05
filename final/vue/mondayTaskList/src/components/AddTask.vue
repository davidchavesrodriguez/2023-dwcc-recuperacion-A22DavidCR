<script>
export default {
  emits:["addTaskEvent"],
  name: 'TaskComponent',
  data() {
    return {
      addTaskValue: "",
    };
  },
  methods: {
    submit(){
      this.$emit("addTaskEvent", this.addTaskValue)
    }
  },
};
</script>

<template>
    <label for="addTask">Add a new task:</label>
    <input type="text" name="addTask" id="addTask" v-model="addTaskValue">
    <button @click="submit" type="button">Add!</button>
</template>

<style scoped></style>

