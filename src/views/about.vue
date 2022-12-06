<!-- eslint-disable -->
<template>
    <div>
        <Header/>
        <Hero/>
        <Philosophy/>
        <Values />
        <Footer />
    </div>
</template>
<!-- eslint-disable -->

<script>
import Hero from '../components/About/Hero.vue';
import Philosophy from '../components/About/Philosophy.vue';
import Values from '../components/About/Values.vue';
import Footer from '../components/Home/Footer.vue';
import Header from '../components/Home/Header.vue';

export default { components: { Header, Hero, Philosophy, Values, Footer } };
</script>

<style></style>
