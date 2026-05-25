<template>
    <div class='person'>
        <h2>情况四：监视 ref 或 reactive 定义的对象类型数据中的【某个属性】</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }} 、{{ person.car.c2 }}</h2>

        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一辆车</button>
        <button @click="changeC2">修改第二辆车</button>
        <button @click="changeCar">修改所有车</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { reactive, ref, watch } from 'vue'

    let person = reactive({
        name: 'ZhangSan',
        age: 18,
        car: {
            c1: '奔驰',
            c2: '宝马'
        }
    })

    function changeName() {
        person.name += '~'
    }
    function changeAge() {
        person.age += 1
    }
    function changeC1() {
        person.car.c1 = '奥迪'
    }
    function changeC2() {
        person.car.c2 = '大众'
    }
    function changeCar() {
        person.car = { c1: '雅迪', c2: '爱玛' }
    }

    watch(() => person.name, (newValue, oldValue) => {
        console.log('person.name 发生变化了', newValue, oldValue)
    })

    watch(() => person.car, (newValue, oldValue) => {
        console.log('person.car 发生变化了', newValue, oldValue)
    }, { deep: true })
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