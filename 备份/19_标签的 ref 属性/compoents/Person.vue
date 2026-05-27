<template>
    <div class='person'>
        <h2>中国</h2>
        <h2 ref="title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出 h2 这个元素</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref } from 'vue'

    let title2 = ref()

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showLog() {
        console.log(title2.value);
    }

    defineExpose({
        a,
        b,
        c
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