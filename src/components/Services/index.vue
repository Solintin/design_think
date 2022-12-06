<!-- eslint-disable -->
<template>
  <div class="relative">
    <div class="absolute md:block hidden right-8 -mt-[144px] z-1">
      <img src="@/assets/Svg/horizontal_union.svg" class="h-[700px]" alt="" />
    </div>
    <div class="max-w-[1440px] md:px-8 px-4 container mx-auto relative">
      <div class="max-w-5xl mt-14 pb-32">
        <div
          class="md:max-w-xl md:mx-0 mx-auto font-bold lg:text-6xl text-3xl text-center md:text-left space-y-3"
        >
          <div>
            <span class="mr-2">Our</span>
            <span class="text-[#FF9E56]">Services</span>
          </div>
        </div>
        <div class="my-6 text-[#667085] text-3xl leading-[42px]">
          DesignThink identifies and tackles challenges that impede organizational
          evolution at different stages of growth. Our dynamic solutions are responsive to
          change, designed to last, and create measurable impact within your company.
        </div>
        <div class="md:justify-start justify-center flex space-x-4 mt-10">
          <a
            href="/services#work-with-us"
            class="bg-dt_core text-white px-3 md:px-4 py-2 md:py-3 md:text-base text-xs font-medium button rounded-md"
          >
            Work with us
          </a>
          <button
            class="text-[#344054] px-3 md:px-4 py-2 md:py-3 md:text-base text-xs flex justify-center items-center space-x-2 font-medium learn rounded-md"
          >
            <img src="@/assets/Svg/play.svg" alt="play" />
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>

    <div class="bg-[#171B3F]">
      <div class="max-w-[1440px] md:px-8 px-4 container mx-auto py-10 text-white">
        <div class="max-w-2xl italic text-5xl mt-10">
          <h1>
            Our <span class="text-[#FFD4B4] mx-1"> services</span> are designed to meet
            your specific needs:
          </h1>
        </div>

        <div class="border-t border-gray-400 md:mt-6">
          <div
            v-for="(item, idx) in services"
            :key="idx"
            class="grid my-8 grid-cols-2 items-stretch md:gap-40 border-b border-gray-400 pt-8 pb-20"
          >
            <div>
              <div class="grid grid-cols-12 items-center gap-4">
                <div
                  class="col-span-1 bg-white rounded-full h-10 w-10 p-2 grid place-content-center text-black text-3xl font-bold"
                >
                  {{ item.tag }}
                </div>
                <div class="col-span-11 text-3xl font-bold">{{ item.title }}</div>
              </div>
            </div>
            <div>
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          tag: "T",
          title: "Talent Acquisition",
          description:
            "We have deep expertise in identifying, attracting and hiring candidates for technical and non-technical roles at every stage of growth. Our clients rely on us for full cycle recruitment services for all levels as well as strategic recruitment initiatives for more targeted skill sets. We value candidates for their unique experiences and recognize how they can contribute to their immediate teams and the organization at large.",
        },
        {
          tag: "C",
          title: "Compensation & Benefits",
          description:
            "We develop compensation and benefits packages that reward existing employees and attract future employees. We offer support in developing appropriate compensation packages that are market competitive and reward the behaviors that resonate with the company’s internal value system",
        },
        {
          tag: "H",
          title: "HR Policies & Processes",
          description:
            "As the workforce dynamically changes, we ensure organizations have a set of governing principles that help us manage the employees as well as instructions on how to ensure compliance with those principles",
        },
        {
          tag: "T",
          title: "Talent Management and Business Partnering",
          description:
            "Employee wellbeing is the cornerstone for a thriving people centric workforce. Regular engagement and management of employees to ensure mutually beneficial yet maximum efficiency is a core pillar to an engaged customer workforce. We collaborate, iterate and deploy a range of solutions that builds the capacity of the people. This pillar focuses on everything from performance management to employee engagement all the way to succession planning and talent retention",
        },
      ],
    };
  },
};
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
