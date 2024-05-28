<script>
export default {
    props:{
        tasks: {
            type: Array,
            required: true
        }
    }
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
</template>
