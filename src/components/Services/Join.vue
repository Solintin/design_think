<!-- eslint-disable -->
<template>
  <div class="bg-join py-[60px]" id="work-with-us">
    <div class="max-w-[1440px] mx-auto overflow-x-hidden">
      <div class="grid md:grid-cols-2 items-center md:gap-40 gap-10 mt-14">
        <div class="md:pl-8 pl-4 max-w-[500px]">
          <h1 class="font-semibold text-3xl md:text-5xl">Work with Us</h1>
          <div class="mt-8 space-y-4">
            <p class="text-[#333333]">
              Interested in working with us? Leave your email address below and we'll be in touch!            </p>

            <mailchimp-subscribe
              url="https://designthinkadvisory.us21.list-manage.com/subscribe/post"
              user-id="be1c36c394d546d206914f0c0"
              list-id="f46fa24a31"
              @error="onError"
              @success="onSuccess"
            >
              <template v-slot="{ subscribe, setEmail, loading }">
                <form @submit.prevent="subscribe">
                  <div class="mt-10 flex space-x-4">
                    <div class="w-8/12">
                      <input
                        @input="setEmail($event.target.value)"
                        type="email"
                        :value="loading ? '' : ''"
                        class="form w-full p-2 md:p-3"
                      />
                    </div>
                    <div class="w-4/12">
                      <button
                        :disabled="loading"
                        type="submit"
                        class="bg-dt_core text-white px-3 md:px-4 py-3 md:py-3 md:text-base text-xs font-medium button rounded-md"
                      >
                        <!-- <span v-if="success">Loading</span> -->
                        <span v-if="loading">Sent!</span>
                        <span v-else>Subscribe</span>
                      </button>
                    </div>
                  </div>
                  <!-- <div v-if="error">{{ error }}</div> -->
                </form>
              </template>
            </mailchimp-subscribe>
            <div class="md:text-sm text-[12px] text-gray-500">
              We care about your data in our
              <a class="mx-1 underline" href="#">privacy policy</a>
            </div>
          </div>
        </div>
        <div
          class="space-y-4 flex flex-col md:px-0 px-4 font-semibold md:font-bold"
        >
          <div class="flex space-x-3 transform md:translate-x-20">
            <div
              class="py-4 px-4 md:px-8 bg-[#FFA564] rounded-xl w-6/12 flex flex-col space-y-6"
            >
              <img src="@/assets/Svg/settings.svg" class="w-10 h-10" alt="" />
              <h1 class="text-white">Efficiency</h1>
            </div>
            <div
              class="py-4 px-4 md:px-8 bg-[#A57FE9] rounded-xl w-6/12 flex flex-col space-y-6"
            >
              <img src="@/assets/Svg/mark.svg" class="w-10 h-10" alt="" />
              <h1 class="text-white">Accountability</h1>
            </div>
          </div>
          <div class="flex space-x-3 transform md:-translate-x-20">
            <div
              class="py-4 px-4 md:px-8 bg-[#44BD57] rounded-xl w-6/12 flex flex-col space-y-6"
            >
              <img src="@/assets/Svg/commitment.svg" class="w-10 h-10" alt="" />
              <h1 class="text-white">Commitment</h1>
            </div>
            <div
              class="py-4 px-4 md:px-8 bg-[#4962E6] rounded-xl w-6/12 flex flex-col space-y-6"
            >
              <img src="@/assets/Svg/team.svg" class="w-10 h-10" alt="" />
              <h1 class="text-white">Team Work</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";
export default {
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {};
  },
  methods: {
    onSuccess(info) {
      console.log(info);
    },
    onError(info) {
      console.log(info);
    },
  },
};
</script>

<style scoped>
.bg-join {
  background: linear-gradient(
    98.82deg,
    rgba(185, 178, 236, 0.2) 3.86%,
    rgba(255, 205, 169, 0.2) 96.31%
  );
}
.form {
  background: #ffffff;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
