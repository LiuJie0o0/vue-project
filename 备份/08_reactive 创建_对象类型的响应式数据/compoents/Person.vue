<template>
    <div class='person'>
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
        <button @click="changeCarPrice">修改汽车的价格</button>
        <hr>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.name }}
            </li>
        </ul>
        <button @click="changeFirstGameName">修改第一个游戏的名字</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { reactive } from 'vue'


    let car = reactive({
        brand: '奔驰',
        price: 100
    })
    let games = reactive([
        { id: 1, name: '王者荣耀' },
        { id: 2, name: '原神' },
        { id: 3, name: '三国志' }
    ])

    function changeCarPrice() {
        car.price += 10
    }

    function changeFirstGameName() {
        games[0].name = '流星蝴蝶剑'
    }

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