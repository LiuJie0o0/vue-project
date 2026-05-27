<template>
    <div class='person'>

    </div>
</template>

<script setup lang='ts' name='Person'>
    import { onBeforeMount, onMounted } from 'vue'
    import { onBeforeUpdate, onUpdated } from 'vue'
    import { onBeforeUnmount, onUnmounted } from 'vue'

    onBeforeMount(() => {
        console.log('子挂载前')
    })
    onMounted(() => {
        console.log('子挂载后')
    })
    onBeforeUpdate(() => {
        console.log('子更新后')
    })
    onUpdated(() => {
        console.log('子更新后')
    })
    onBeforeUnmount(() => {
        console.log('子卸载前')
    })
    onUnmounted(() => {
        console.log('子卸载后')
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 1opx;
        padding: 20px;
    }

    button {
        margin: 0 5px;
    }
</style>