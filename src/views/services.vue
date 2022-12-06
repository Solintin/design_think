<!-- eslint-disable -->
<template>
  <div>
    <Header />
    <Index />
    <Approach />
    <Join />
    <Footer />
  </div>
</template>
<!-- eslint-disable -->

<script>
import Footer from '../components/Home/Footer.vue';
import Header from '../components/Home/Header.vue';
import Approach from '../components/Services/Approach.vue';
import Index from "../components/Services/index.vue";
import Join from '../components/Services/Join.vue';

export default { components: { Index, Header, Approach, Join, Footer } };
</script>

<style></style>
