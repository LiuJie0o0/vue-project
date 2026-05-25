<template>
    <div class='person'>
        <h2>情况二：监视【ref】定义的【对象类型】数据</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref, watch } from 'vue'

    let person = ref({
        name: 'ZhangSan',
        age: 18
    })

    function changeName() {
        person.value.name += '~'
    }

    function changeAge() {
        person.value.age += 1
    }

    function changePerson() {
        person.value = { name: 'LiSi', age: 20 }
    }

    watch(person, (newValue, oldValue) => {
        console.log('person发生变化了', newValue, oldValue)
    }, {
        deep: true,
        immediate: true
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