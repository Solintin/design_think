<!-- eslint-disable -->
<template>
  <div>
    <header
      class="max-w-[1440px] md:px-8 px-4 container mx-auto text-[#667085] flex justify-between py-4 lg:py-6 w-full"
    >
      <div class="">
        <router-link to="/">
            <img
              src="@/assets/Svg/logo.svg"
              alt=""
              class="md:w-full md:h-full h-10 w-24"
            />
        </router-link>
      </div>
      <div class="md:flex hidden space-x-4 items-center font-medium">
        <router-link to="/about" class="text-xs lg:text-base">About</router-link>
        <router-link to="/services" class="text-xs lg:text-base">Services</router-link>
        <a href="/services#work-with-us" class="text-xs lg:text-base">Work with us</a>
      </div>

      <a
        href="/services#work-with-us"
        class="bg-dt_core text-white md:px-4 px-3 py-2 md:text-base text-xs font-medium button rounded-md"
      >
        Work with us
      </a>
    </header>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>

<style>
.button {
  border: 1px solid #00bee3;
  /* Shadow/xs */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
