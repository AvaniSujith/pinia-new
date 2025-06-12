<script setup>

import { useCounterStore } from '@/stores/counter.js';

import Counter from '@/component/Counter.vue';

const storeCounter = useCounterStore()


</script>

<template>
    <div class="home">

        <Counter />
       
        <div class="buttons">
            <button @click="storeCounter.decreaseCount">-</button>
            <button @click="storeCounter.increaseCount">+</button>
        </div>

        <hr>

        <div>
            The counter is : {{  storeCounter.OddOrEven }}
        </div>

        <hr>

        <h3>Edit counter:</h3>
        <input 
            v-model="storeCounter.count"
            type="number" />
    </div>
</template>

<style>
.count{
    font-size: 60px;
    margin: 20px;
}
.buttons button{ 
    font-size: 40px;
    margin: 10px;
}

</style>
