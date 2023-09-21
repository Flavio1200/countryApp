<template>
    <div class="header">
        <h1>Where in the world?</h1>
        <button class="btn-dark" @click="$emit('theme',true)">Dark mode</button>
    </div>
</template>

<!-- <script setup>
    const theme = defineEmits(['theme'])
</script> -->

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2b3945;
    padding: 1.5rem 2.5rem;
    box-shadow: 0px 2px 6px #00000077;
}
.header h1{
    font-size: 1.5rem;
    color: #fff;
}
.btn-dark{
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
}
</style>