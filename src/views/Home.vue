<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import MovieList from '../components/MovieList.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { iMovie } from '../types/Movie';
import { store } from '../store';
const movies = ref<Array<iMovie>>([]);
const hostest = ref<iMovie>();

onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&language=${store.language}`);
    movies.value = res.data.results;
    hostest.value = res.data.results[0];
})
</script>
<template>
    <Hero :data="hostest" />
    <MovieList :data="movies" />
</template>