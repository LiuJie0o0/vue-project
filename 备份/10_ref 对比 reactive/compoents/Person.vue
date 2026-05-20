<template>
    <div class='person'>
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
        <button @click="changeCarBrand">修改汽车的品牌</button>
        <button @click="changeCarPrice">修改汽车的价格</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我 SUM+1</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref, reactive } from 'vue'


    let car = reactive({
        brand: '奔驰',
        price: 100
    })
    let sum = ref(0)

    function changeCarBrand() {
        car.brand = '宝马'
    }

    function changeCarPrice() {
        car.price += 10
    }

    function changeCar() {
        // car.brand = '奥迪'
        // car.price = 80
        // car = reactive({ brand: '奥迪', price: 80 })

        Object.assign(car, { brand: '奥迪', price: 80 })
    }

    function changeSum() {
        sum.value += 1
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