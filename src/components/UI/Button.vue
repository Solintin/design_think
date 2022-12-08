<!-- eslint-disable -->

<template>
  <div>
    <button
      @click="action"
      class="bg-dt_core text-white md:px-4 px-3 py-2 md:text-base text-xs font-medium button rounded-md"
    >
      {{ label }}
    </button>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  name: "Button",
  props: ["label", "action"],
};
</script>

<style></style>
