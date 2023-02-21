<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

interface iMovie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
}

const title = ref('World');
const movies = ref<Array<iMovie>>([]);
const hostest = ref<iMovie>();

onMounted(async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=3f4909db395afd87c3df77456e772dfd&language=vi-VN`);
    movies.value = res.data.results;
    hostest.value = res.data.results[0];
    console.log(res.data.results);
})

</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-3xl font-bold">
            Hello {{ title }}!
        </h1>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="item in movies" :key="item.id" class="border border-solid border-white">
                <img :src="`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`" :alt="item.title"/>
                <h1 class="text-xl font-bold">{{ item.title }}</h1>
                <p>{{ item.overview }}</p>
            </div>
        </div>
    </main>
</template>

<style></style>