<template>
    <div>
        <ChildComponent ref="childComponent" />
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
    components: {
        ChildComponent
    },
    mounted() {
        //invoke doSomething function on child component
        this.$refs.childComponent.doSomething();
    }
}

</script>