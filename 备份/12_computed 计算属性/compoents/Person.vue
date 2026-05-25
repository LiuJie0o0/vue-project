<template>
    <div class='person'>
        姓：<input type="text" v-model="firstName">
        <br>
        名：<input type="text" v-model="lastName">
        <br>
        全名：<span>{{ fullName }}</span>
        <br>
        <button @click="changeFillName">点击更改全名</button>
    </div>
</template>

<script setup lang='ts' name='Person'>
    import { ref, computed } from 'vue'

    let firstName = ref('zhang')
    let lastName = ref('san')

    // let fullName = computed(() => {
    //     return firstName.value.slice(0, 1).toLocaleUpperCase()
    //         + firstName.value.slice(1)
    //         + '-' + lastName.value
    // })

    let fullName = computed({
        set(value) {
            const [str1, str2] = value.split('-')
            firstName.value = str1
            lastName.value = str2
        },
        get() {
            console.log('get')

            return firstName.value.slice(0, 1).toLocaleUpperCase()
                + firstName.value.slice(1)
                + '-' + lastName.value
        }
    })
    function changeFillName() {
        fullName.value = 'li-si'
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