<!-- eslint-disable -->
<template>
  <div class="max-w-[1440px] md:px-8 px-4 container mx-auto">
    <div class="grid md:grid-cols-2 md:gap-40 gap-10 mt-14">
      <div class="space-y-8 animate__animated animate__fadeInLeft">
        <router-link to="/services"
          class="flex items-center mx-auto md:mx-0 space-x-1 pill md:text-base text-xs py-1 px-2 max-w-max text-[#6941C6]  font-medium"
        >
          <div class="bg-white py-1 px-2 rounded-xl">New</div>
          <h1 class="mr-1">Explore our unique 360 approach</h1>
          <img src="@/assets/Svg/arrow.svg" alt="" />
        </router-link>
        <div
          class="md:max-w-xl md:mx-0 mx-auto font-bold lg:text-6xl text-3xl text-center md:text-left space-y-3"
        >
          <div class="text-[#101828]">Helping Emerging</div>
          <div class="text-[#101828]">Markets Startups Build</div>
          <div>
            <span class="text-[#00BEE3] mr-2">Resilient</span>
            <span class="text-[#FF9E56]">Teams</span>
          </div>
        </div>
        <div class="max-w-lg my-6 text-center md:text-left">
          We are a human resources consulting and advisory firm providing
          integrated and strategic services related to the employee lifecycle
          from hire to retire, and everything in between.
        </div>
        <div class="md:justify-start justify-center flex space-x-4">
          <a
          href="/services#work-with-us"
            class="bg-dt_core text-white px-3 md:px-4 py-2 md:py-3 md:text-base text-xs font-medium button rounded-md"
          >
            Work with us
          </a>
          <router-link to="/about"
            class="text-[#344054] px-3 md:px-4 py-2 md:py-3 md:text-base text-xs flex justify-center items-center space-x-2 font-medium learn rounded-md"
          >
            <img src="@/assets/Svg/play.svg" alt="play" />
            <span>Learn More</span>
          </router-link>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-8 animate__animated animate__fadeInRight animate__delay-1s"
      >
        <img src="@/assets/Svg/guy.png" alt="" />
        <img src="@/assets/Svg/lady.png" alt="" />
        <img src="@/assets/Svg/woman.png" alt="" />
        <img src="@/assets/Svg/man.png" alt="" />
      </div>
    </div>
    <div class="max-w-[1085px] space-y-4 mt-20 mb-14">
      <h1 class="text-[#6941C6] font-semibold">Building Uniqueness</h1>
      <h1 class="font-semibold text-2xl md:text-4xl">A 360° Approach</h1>
      <p class="text-[#667085] text-base md:text-2xl">
        At DesignThink, we are experts at building and scaling high-performing
        teams with expertise ranging from early-stage + high-growth startups to
        international development organizations and multilateral organizations
      </p>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>

<style>
.pill {
  background: #f9f5ff;
  mix-blend-mode: multiply;
  border-radius: 16px;
}
.button {
  border: 1px solid #00bee3;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
.learn {
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
