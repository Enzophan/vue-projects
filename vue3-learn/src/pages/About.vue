<template>
    <div class="user">
        <h2>About Page</h2>
        <h2>User: {{ $route.params.id }}</h2>
        <span>Query: {{ query }}</span>
        <div class="tabs">
            <router-link :to="{ name: 'About.AuthorProfile', params: { id: $route.params.id } }">Go to Profile</router-link>
            |
            <router-link :to="{ name: 'About.AuthorPosts', params: { id: $route.params.id } }">Go to Posts</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
    useRoute,
    // useRouter
} from "vue-router";

const query = ref({});
const isLoading = ref(true)
const route = useRoute();
// const router = useRouter();

onMounted(async () => {
    console.log("route.params ", route.params)
    query.value = { id: route.params.id, username: route.params.username };
    isLoading.value = false;
    // router.push(`/about/${route.params.id}/${tab.value}`)
});

// const handleTabs = (value) => {
//     // tab.value = value;
//     console.log("handleTabs ", value)
//     router.push(`/about/${route.params.id}/${value}`)
// };

</script>