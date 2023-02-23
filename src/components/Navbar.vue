<script lang="ts">
import { store } from '../store';

export default {
    name: 'Navbar',
    data() {
        return {
            view: {
                topOfPage: true,
            },
            store
        }
    },

    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            if(window.pageYOffset>0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        },
        changeLanguage() {
            if (this.store.language === 'en-US') {
                this.store.changeLanguage('vi-VN');
            } else {
                this.store.changeLanguage('en-US');
            }
            this.$router.go(0);
        },
    }
}

</script>

<template>
    <nav class="w-full bg-transparent mx-auto flex justify-between fixed z-50" :class="{ 'on-scroll': !view.topOfPage}">
        <div class="uppercase font-bold p-6">
            <router-link class="ml-6" to="/">Movie App</router-link>
        </div>
        <div class="p-6">
            <router-link class="ml-6" to="/">Home</router-link>
            <a class="ml-6" href="https://tourdeforce.netlify.app/">About</a>
            <span class="ml-6 cursor-pointer" @click="changeLanguage">{{ store.language === 'en-US' ? 'Tiếng Việt' : 'English' }}</span>
        </div>
    </nav>
</template>

<style>
.on-scroll {
  background-color: #242424;
  transition: all 0.5s ease-in-out;
}
</style>