<script setup lang="ts">
import { iMovie } from '../types/Movie';
const props = defineProps<{ data: iMovie }>();
</script>

<template>
    <RouterLink :to="`/movie/${props.data?.id}`">
        <div class="card cursor-pointer rounded-3xl flex justify-end flex-col px-4 py-4 relative"
            :style="{ 'background-image': `url('https://image.tmdb.org/t/p/w500/${props.data?.backdrop_path}')` }">
            <div class="drop-background"></div>
            <div class="z-10">
                <h1 class="uppercase font-bold text-lg">{{ props.data?.title }}</h1>
                <div class="text-yellow-100 text-md">{{ props.data?.release_date.slice(0, 4) }}</div>
                <div class="text-yellow-100 text-md">{{ props.data?.vote_average.toFixed(1) }} rating</div>
            </div>
        </div>
    </RouterLink>
</template>

<style>
.card {
    height: 17.5rem;
    overflow: hidden;
}

.drop-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #242424;
    background: linear-gradient(to top, #000000, transparent);
}
</style>