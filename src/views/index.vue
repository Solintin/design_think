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
import Header from "../components/Home/Header.vue";
import Hero from "../components/Home/Hero.vue";
import Talent from "../components/Home/Talent.vue";
import Benefit from "../components/Home/Benefit.vue";
import HR from "../components/Home/HR.vue";
import Management from "../components/Home/Management.vue";
import Footer from "../components/Home/Footer.vue";
export default {
  components: { Header, Hero, Talent, Benefit, HR, Management, Footer },
};
</script>

<style scoped>
.hero {
  background-image: url("~@/assets/Svg/bg.svg");
}
</style>
