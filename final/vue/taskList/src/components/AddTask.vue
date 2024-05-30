<script>
export default {
    props: ['addTaskValue'],
    emits: ['addTask', 'update:addTaskValue'], // Agregamos el evento update:addTaskValue
    methods: {
        submit() {
            this.$emit('addTask', this.addTaskValue)
        },
        updateTaskValue(value) {
            // Emitimos el evento update:addTaskValue con el nuevo valor del input
            this.$emit('update:addTaskValue', value);
        }
    },
}
</script>

<template>
    <div>
        <label for="addTask">Add task:</label>
        <!-- Utilizamos @input para llamar a updateTaskValue con el nuevo valor del input -->
        <input type="text" name="addTask" id="addTask" :value="addTaskValue"
            @input="updateTaskValue($event.target.value)">
        <button type="button" @click="submit">Add</button>
    </div>
</template>
