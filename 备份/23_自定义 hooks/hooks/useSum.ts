import { onMounted, ref } from 'vue'


export default function () {

    let sum = ref(1)

    function changeSum() {
        sum.value += 1
    }

    onMounted(() => {
        sum.value += 26
    })

    return {
        sum,
        changeSum
    }
}