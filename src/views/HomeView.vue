<script setup>
import { ref } from 'vue';

const count = ref(0);

</script>

<template>
    <div class="home">
        <div class="count">{{  count }}</div>
        <div class="buttons">
            <button>-</button>
            <button>+</button>
        </div>
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