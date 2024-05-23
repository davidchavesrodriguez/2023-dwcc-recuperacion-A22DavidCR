<template>
    <h3>Lista</h3>
    <div>
        <h5>JoséJulián</h5>
        <p v-if="shown"><b>Teléfono: </b>8478234</p>
        <p v-if="shown"><b>Correo: </b>dsankdnja@fsdnf.caski</p>
    </div>
    <button type="button" @click="toggleButtons">{{ buttonText }}</button>
</template>
<script>
export default {
    data() {
        return {
            shown: true,
            buttonText: "Hide",
        };
    },
    methods: {
        toggleButtons() {
            if (this.shown == true) {
                this.shown = false;
                this.buttonText = "show"
            } else {
                this.shown = true;
                this.buttonText = "hide"
            }
        }
    },
};
</script>
<style></style>