<template>
    <div class='person'>

    </div>
</template>

<script setup lang='ts' name='Person'>
    import { type IPerson, type IPersons } from '@/types'

    let person: IPerson = { id: '111', name: 'ZhangSan', age: 18 }

    let personList: IPersons = [
        { id: '111', name: 'ZhangSan1', age: 18 },
        { id: '222', name: 'ZhangSan2', age: 19 },
        { id: '333', name: 'ZhangSan3', age: 20 }
    ]
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