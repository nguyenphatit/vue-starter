<script setup lang="ts">
import { iMovie } from '../types/Movie';
import MovieCard from './MovieCard.vue';
const props = defineProps<{ data: Array<iMovie> }>();
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center my-20">Discovery</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-4 sm:mx-0">
            <div v-for="movie in props?.data" :key="movie.id">
                <MovieCard :data="movie" />
            </div>
        </div>
    </div>
</template>