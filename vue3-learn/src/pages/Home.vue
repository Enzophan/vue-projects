<template>
    <div id="app">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Zinzo Vue.js App" />
        <ParentComponent />
        <ParentComposition />

        <div class="users-list">
            <div v-for="user in users" :key="user.id">
                <router-link :to="{ name: 'About', params: { id: user.id, username: user.name } }">
                    {{ user.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import ParentComponent from '../components/ParentComponent.vue';
import ParentComposition from '../components/ParentComposition.vue';

const users = [{ id: 1, name: "Nhan" }, { id: 2, name: "Mint" }]
</script>