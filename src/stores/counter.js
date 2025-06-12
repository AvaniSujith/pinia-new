import { ref, computed } from "vue";

import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {

    // state 

    const count = ref(0)
    
    // getters

    const OddOrEven = computed(() => {
    if(count.value % 2 === 0) return 'Even'
    return 'Odd'
    })
    
    // const doubleCount = computed(() => count.value * 2)

    // actions

    function increaseCount(){
        count.value++
    }

    function decreaseCount(){
        count.value--
    }

    return { 

        //state property
        count,

        //actions
        increaseCount,
        decreaseCount,
        OddOrEven
    }
})