<template>
    <Person />
</template>

<script setup lang='ts' name='App'>
    import Person from '@/compoents/Person.vue'
    import { onBeforeMount, onMounted } from 'vue'
    import { onBeforeUpdate, onUpdated } from 'vue'
    import { onBeforeUnmount, onUnmounted } from 'vue'

    onBeforeMount(() => {
        console.log('父挂载前')
    })
    onMounted(() => {
        console.log('父挂载后')
    })
    onBeforeUpdate(() => {
        console.log('父更新后')
    })
    onUpdated(() => {
        console.log('父更新后')
    })
    onBeforeUnmount(() => {
        console.log('父卸载前')
    })
    onUnmounted(() => {
        console.log('父卸载后')
    })
</script>

<style scoped></style>