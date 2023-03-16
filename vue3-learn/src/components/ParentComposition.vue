<template>
    <ChildComposition ref="childComponent" user-name="John Doe" />
    <button @click="handleButton">Test</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ChildComposition from './ChildComposition.vue'

const childComponent = ref()

onMounted(() => {
    childComponent.value.doSomething()
});

const handleButton = () => {
    childComponent.value.doSomething()
}

</script>