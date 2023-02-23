import { reactive } from "vue";

export const store = reactive({
    genres: [],
    language: localStorage.getItem('language') || 'en-US',
    changeLanguage(lang: string) {
        if (lang) {
            localStorage.setItem('language', lang || 'en-US');
            this.language = lang;
        }
    }
});