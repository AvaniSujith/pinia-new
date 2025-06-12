<script setup>
   
import { useCounterStore } from '@/stores/counter.js';

const storeCounter = useCounterStore();

</script>

<template>
     <div class="count">{{  storeCounter.count }}</div>
</template>