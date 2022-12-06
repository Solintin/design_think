<!-- eslint-disable -->
<template>
  <div class="bg pt-[60px]">
    <div class="max-w-[1440px] md:px-8 px-4 container mx-auto">
      <div class="grid md:grid-cols-2 md:gap-40 gap-10 mt-14">
        <div>
          <img src="@/assets/Svg/talent.svg" alt="" />
        </div>
        <div v-vue-aos.once="{animationClass:'twisterInDown animated'}" class="mt-10">
          <h1 class="font-semibold text-3xl md:text-5xl">Talent Acquisition</h1>
          <p class="mt-6">
            We have deep expertise in attracting, identifying and hiring
            candidates for technical and non-technical roles at every stage of
            growth.
          </p>
          <div class="mt-10">
            <div class="flex space-x-4">
              <img src="@/assets/Svg/check.svg" alt="" />
              <p>
                Close more talents with single-page talent management service
              </p>
            </div>
            <div class="flex space-x-4 mt-6">
              <img src="@/assets/Svg/check.svg" alt="" />
              <p>
                Close more talents with single-page talent management service
              </p>
            </div>
          </div>
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
  background: linear-gradient(
    98.82deg,
    rgba(185, 178, 236, 0.1) 3.86%,
    rgba(255, 205, 169, 0.1) 96.31%
  );
}
</style>
