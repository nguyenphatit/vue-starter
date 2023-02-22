<script setup lang="ts">
import { iMovie } from '../types/Movie';
const props = defineProps<{ data: iMovie }>();
</script>

<template>
    <div class="h-screen jumbotron flex items-center"
        :style="{ 'background-image': `url('https://image.tmdb.org/t/p/original${props?.data?.backdrop_path}')` }">
        <div class="drop-background"></div>
        <div class="container mx-auto z-40">
            <h1
                class="uppercase font-bold font-serif text-yellow-50 mb-4 mx-4 sm:mx-auto text-4xl leading-snug md:text-6xl md:leading-snug lg:text-8xl lg:leading-snug xl:text-9xl xl:leading-snug">
                {{ props?.data?.title }}
            </h1>
            <p class="mx-4 sm:mx-0 max-w-screen-lg">{{ props?.data?.overview }}</p>
        </div>
    </div>
</template>

<style>
.jumbotron {
    background-color: bisque;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;
}

.drop-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #242424;
    background: linear-gradient(to top, #242424, transparent);
}
</style>