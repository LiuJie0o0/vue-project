<template>
    <div class='person'>
        <h2>情况一：监视【ref】定义的【基本类型】数据</h2>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我 +1</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref, watch } from 'vue'


    let sum = ref(1)

    function changeSum() {
        return sum.value += 1
    }

    let stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum发生变化了', newValue, oldValue)
        if (newValue >= 10) {
            stopWatch()
        }
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