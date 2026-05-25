<template>
    <div class='person'>
        <h2>情况三：监视【reactive】定义的【对象类型】数据</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { reactive, watch } from 'vue'

    let person = reactive({
        name: 'ZhangSan',
        age: 18
    })

    function changeName() {
        person.name += '~'
    }

    function changeAge() {
        person.age += 1
    }

    function changePerson() {
        person = Object.assign(person, { name: 'LiSi', age: 20 })
    }

    watch(person, (nweValue, oldValue) => {
        console.log('person 发生变化了', nweValue, oldValue)
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