<template>
    <div class='person'>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我 sum+1</button>
        <br><br>
        <img v-for="dog in dogList" :src="dog">
        <br>
        <button @click="getDog">再来一只小狗</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

    const { sum, changeSum } = useSum()
    const { dogList, getDog } = useDog()
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

    img {
        height: 100px;
        margin: 0 10px;
    }
</style>