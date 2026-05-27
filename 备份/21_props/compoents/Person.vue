<template>
    <div class='person'>
        <ul>
            <li v-for="person in persons" :key="person.id">
                {{ person.name }} -- {{ person.age }}
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { type IPersons } from '@/types'

    // defineProps(['persons'])

    // defineProps<{ persons: IPersons }>()

    withDefaults(
        defineProps<{ persons?: IPersons }>(),
        { persons: () => [{ id: '000', name: '未知', age: 0 }] }
    )
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