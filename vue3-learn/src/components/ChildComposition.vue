<template>
    <div>
        <h1>Child Composition</h1>
        <div>Composition API</div>
        <span>{{ userName }}</span>
    </div>
</template>

<script setup >
import { defineExpose, defineProps } from 'vue';

//https://levelup.gitconnected.com/handling-props-in-vue-3-composition-api-8242ee07d089
defineProps({
    userName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    selectedSkills: {
        type: Array,
        default() {
            return [];
        }
    }
})

function doSomething() {
    // do smething
    alert("TEST Composition API")
}




defineExpose({ doSomething })
</script>