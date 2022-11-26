<!-- eslint-disable -->
<template>
  <div>
    <div class="hero">
      <Header />
      <Hero />
    </div>
    <Talent />
    <HR />
    <Benefit />
    <Management />
    <Footer />
  </div>
</template>
<!-- eslint-disable -->

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Talent from "../components/Talent.vue";
import Benefit from "../components/Benefit.vue";
import HR from "../components/HR.vue";
import Management from "../components/Management.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Hero, Talent, Benefit, HR, Management, Footer },
};
</script>

<style scoped>
.hero {
  background-image: url("/assets/Svg/logo.svg");
}
</style>
