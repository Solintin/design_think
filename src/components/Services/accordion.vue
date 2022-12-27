<!-- eslint-disable -->
<template>
  <div
    class="w-full my-8 md:items-stretch md:gap-40 gap-10 border-t border-gray-400 pt-8 pb-20"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-4">
        <div
          class="col-span-1 bg-white rounded-full h-10 w-10 p-2 grid place-content-center text-black text-3xl font-bold"
        >
          <p>{{ item.tag }}</p>
        </div>
        <div class="col-span-11 text-base md:text-3xl font-bold">
          <p>{{ item.title }}</p>
        </div>
      </div>

      <img
        @click="handleOpen"
        v-if="!isOpen"
        src="@/assets/Svg/collapse.svg"
        class="h-6 md:h-8 w-6 md:w-8 "
        alt="collapse"
      />
      <img
        @click="handleOpen"
        v-else
        src="@/assets/Svg/openCollapse.svg"
        class="h-6 md:h-8 w-6 md:w-8 "
        alt="collapse"
      />
    </div>
    <div class="grid md:grid-cols-2 mt-10" v-if="isOpen">
        <div class="md:block hidden"></div>
      <div >{{ item.description }}</div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  props: ["item"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
