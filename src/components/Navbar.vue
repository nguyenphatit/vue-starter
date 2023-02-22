<script lang="ts">
export default {
    name: 'Navbar',
    data() {
        return {
            view: {
                topOfPage: true,
            }
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
        }
    }
}

</script>

<template>
    <nav class="w-full bg-transparent mx-auto flex justify-between fixed z-50" :class="{ 'on-scroll': !view.topOfPage}">
        <div class="uppercase font-bold p-6">Vue Starter</div>
        <div class="p-6">
            <router-link class="ml-6" to="/">Home</router-link>
            <router-link class="ml-6" to="/about">About</router-link>
            <router-link class="ml-6" to="/contact">Contact</router-link>
        </div>
    </nav>
</template>

<style>
.on-scroll {
  background-color: #242424;
  transition: all 0.5s ease-in-out;
}
</style>