<template>
    <Person :persons="personList" />
</template>

<script setup lang='ts' name='App'>
    import Person from '@/compoents/Person.vue'
    import { reactive } from 'vue'
    import { type IPersons } from '@/types/index.ts'

    let personList = reactive<IPersons>([
        { id: '111', name: 'ZhangSan1', age: 18 },
        { id: '222', name: 'ZhangSan2', age: 19 },
        { id: '333', name: 'ZhangSan3', age: 20 }
    ])
</script>

<style scoped></style>