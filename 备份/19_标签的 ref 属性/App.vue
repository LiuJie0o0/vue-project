<template>
    <h2 ref="title2">你好</h2>
    <button @click="showLog">点我输出 h2 这个元素</button>
    <button @click="showTest">测试</button>
    <Person ref="ren" />
</template>

<script setup lang='ts' name='App'>
    import Person from '@/compoents/Person.vue'
    import { ref } from 'vue'

    let title2 = ref()
    let ren = ref()

    function showLog() {
        console.log(title2.value);
    }

    function showTest() {
        console.log(ren.value);
        console.log(ren.value.a, ren.value.b, ren.value.c);
    }
</script>

<style scoped></style>