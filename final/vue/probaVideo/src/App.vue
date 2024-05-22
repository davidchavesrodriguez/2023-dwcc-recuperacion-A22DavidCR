<script setup>
const name = "Vue dinámico";

function handleClick(){
  console.log("Click");
  
}
</script>

<template>
  <h1>Hola, {{ name.toUpperCase() }}</h1>
  <button @click="handleClick">Ola</button>
</template>

<style>
h1 {
  color: goldenrod;
}
</style>
