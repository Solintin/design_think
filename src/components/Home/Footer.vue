<!-- eslint-disable -->
<template>
  <div class="bg pt-[48px]">
    <div class="max-w-[1440px] relative md:px-8 px-4 container overflow-y-hidden mx-auto text-[#D6DDEB]">
      <div class="absolute md:block hidden right-8 -top-40 z-1">
      <img src="@/assets/Svg/footer_union.svg" class="h-[450px]" alt="" />
    </div>
      
      <div class="grid md:grid-cols-12 gap-20">
        <div class="col-span-4 space-y-6">
          <a href="#"> <img src="@/assets/Svg/logo_footer.svg" alt="" /> </a>
          <p class="text-sm">
            We take a 360° view of your company to develop solutions that
            address core challenges from the root
          </p>
        </div>
        <div class="col-span-8 space-y-7">
          <div><h1>Company</h1></div>
          <div
            class="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4 text-sm"
          >
            <router-link to="/about">About</router-link>
            <router-link to="/services">Our Services</router-link>
            <router-link to="/services/#work-with-us">Work with us</router-link>
            <router-link to="/#">Privacy Policy</router-link>
          </div>
        </div>
      </div>

      <div
        class="lg:border-t border-[#D6DDEB] md:py-10 py-5 flex md:flex-row flex-col md:space-y-0 space-y-8 justify-between mt-10"
      >
        <div>
          <p class="text-gray-400 text-xs">
            2022 @ DesignThink. All rights reserved.
          </p>
        </div>
        <div class="flex space-x-12 items-center">
          <a href="#"><img src="@/assets/Svg/fb.svg" alt="" /></a>
          <a href="#"><img src="@/assets/Svg/instagram.svg" alt="" /></a>
          <a href="#"><img src="@/assets/Svg/dribble.svg" alt="" /></a>
          <a href="#"><img src="@/assets/Svg/linkedin.svg" alt="" /></a>
          <a href="#"><img src="@/assets/Svg/twitter.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>

<style scoped>
.bg {
  background: #202430;
}
</style>
