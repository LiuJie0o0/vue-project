<template>
    <div class='person'>
        <h2>需求：当水温达到60℃或者水位达到80cm，则通知服务器</h2>
        <h2>水温：{{ temp }}</h2>
        <h2>水位：{{ height }}</h2>
        <button @click="changeTemp">点我水温 +10</button>
        <button @click="changeHeight">点我水位 +10</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref, watch, watchEffect } from 'vue'

    let temp = ref(30)
    let height = ref(50)

    function changeTemp() {
        temp.value += 10
    }
    function changeHeight() {
        height.value += 10
    }

    // watch([temp, height], (newValue) => {
    //     let [newTemp, newHeight] = newValue
    //     if (newTemp >= 60 || newHeight >= 80) {
    //         console.log('通知服务器')
    //     }
    // })

    watchEffect(() => {
        if (temp.value >= 60 || height.value >= 80) {
            console.log('通知服务器', temp.value, height.value)
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