<script>
export default {
  props: ["taskArray"],
};

</script>

<template>
  <ul>
    <li v-for="task in taskArray" :key="task.id">Task: {{ task }}</li>
  </ul>
</template>


<style scoped></style>
