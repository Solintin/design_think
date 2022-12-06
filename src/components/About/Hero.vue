<!-- eslint-disable -->
<template>
  <div class="max-w-[1440px] md:px-8 px-4 container mx-auto">
    <div class="md:pt-[55px] md:pb-[300px] bg_hero">
      <div class="max-w-[850px] mx-auto animate__animated animate__fadeInDown">
        <h1 class="font-bold lg:text-6xl text-3xl text-center md:text-left text-[#060C3C]">
          Our mission is to transform the culture of work in Africa
        </h1>
      </div>
    </div>
    <div class="relative md:-mt-[280px]">
      <div class="absolute inset-0 z-[-1] md:block hidden">
        <img src="@/assets/Svg/union_about.svg" alt="hero_image" />
      </div>
      <div
        class="grid md:grid-cols-2 gap-10 pt-10 items-stretch md:px-[120px] aboslute inset-0"
      >
        <div class="animate__animated animate__fadeInLeft animate__delay-1s">
          <img
            src="@/assets/Svg/three_women.png"
            alt="hero_image"
            class="rounded-md w-full md:w-auto"
          />
        </div>
        <div
          class="flex-col flex space-y-4 md:-ml-14 animate__animated animate__fadeInRight animate__delay-2s"
        >
          <img
            src="@/assets/Svg/one_man.png"
            alt="hero_image"
            class="rounded-md h-full"
          />
          <img
            src="@/assets/Svg/discussion.png"
            alt="hero_image"
            class="rounded-md h-full"
          />
        </div>
      </div>
    </div>
    <div class="max-w-[920px] mx-auto text-base md:text-2xl md:py-24 py-10">
      <h2> DesignThink is a human resources consulting and advisory firm that provides
      integrated and strategic services touching on all points of an employee lifecycle.
      We work with innovative companies operating in Africa to build high-performing teams
      by partnering with founders and their executive teams to re-imagine processes and
      create a work environment that inspires existing talent – and attracts world-class
      talent – to drive strategic goals.</h2>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>

<style scoped>
.bg_hero {
  background-image: url("~@/assets/Svg/about_hero_bg.svg");
  mix-blend-mode: normal;
}
.hero_image {
  background-image: url("~@/assets/Svg/union_about.svg");
}
</style>
