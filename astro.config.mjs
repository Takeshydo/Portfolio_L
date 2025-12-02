import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    site: 'https://takeshydo.github.io/Portfolio',
    base: '/Portfolio/',
    prefetch: true
});