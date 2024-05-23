<template>
    <h2>{{ message }}</h2>
    <button type="button" @click="toggleCase">MAYUS/minus</button>
</template>
<script>
export default {
    data() {
        return {
            message: "Bos días, 42"
        }
    },
    methods: {
        toggleCase() {
            this.message = this.added ? this.message.toUpperCase() :
                this.message.toLowerCase();
            this.added = !this.added;
        },
    },
};
</script>
<style></style>