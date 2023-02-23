<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { store } from '../store';
const route = useRoute()
const movie = ref();
onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}movie/${route.params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=${store.language}`);
    movie.value = res.data;
})
</script>

<template>
    <div class="h-screen jumbotron flex items-center">
        <div class="container mx-auto z-40 flex flex-col md:flex-row lg:flex-row xl:flex-row">
            <div class="m-4 flex justify-center items-center md:w-1/2">
                <img class="rounded-xl" :src="`https://image.tmdb.org/t/p/w500${movie?.poster_path}`" :alt="movie?.title" />
            </div>
            <div class="flex flex-col justify-center items-center w-fit md:w-1/2">
                <h1 class="uppercase font-bold font-serif text-yellow-50 mb-4 mx-4 sm:mx-auto text-4xl leading-snug">{{ movie?.title }} ({{ movie?.release_date.slice(0, 4) }})</h1>
                <h2 class="mb-4 italic">{{ movie?.tagline }}</h2>
                <h2 class="mb-4">{{ movie?.vote_average.toFixed(1) }}/10 rating</h2>
                <p>{{ movie?.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.jumbotron {
    background-color: #242424;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.glassmorphism-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(255, 255, 255, 00);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
</style>