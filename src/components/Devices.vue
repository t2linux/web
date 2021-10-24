<template>
  <div class="max-w-full mx-auto flex justify-center bg">
    <div class="py-14 md:py-40 px-5">
      <span class="TitleText">Supported Machines</span>
      <div class="flex flex-col md:flex-row justify-center">
        <span class="BodyText">Mac devices that use the T2 chip</span>
      </div>

      <div
        class="
          grid grid-cols-1
          md:grid-cols-3
          gap-12
          md:gap-60
          mt-5
          md:mt-14
        "
      >
        <div
          v-for="item in machines"
          v-bind:key="item.index"
          class="flex flex-col justify-center items-center text-center"
        >
          <img
            :src="require(`../assets/icons/machines/` + item.src)"
            alt=""
            class="w-7/12 h-7/12 md:w-36 md:h-36"
            srcset=""
          />
          <span class="text-white text-base md:text-2xl mt-5">{{
            item.name
          }}</span>
          <span class="text-sm mt-3 BodyColor">{{ item.models }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machines: [
        {
          src: "macbook-air.svg",
          name: "MacBook Air",
          models: "2020, 2019, 2018",
        },
        {
          src: "macbook-pro.svg",
          name: "MacBook Pro",
          models: "2018 (4 x Thunderbolt), 2019, 2020",
        },
        {
          src: "imac.svg",
          name: "iMac",
          models: '2020 27"',
        },
        {
          src: "imac-pro.svg",
          name: "iMac Pro",
          models: "2017",
        },
        {
          src: "mac-mini.svg",
          name: "Mac mini",
          models: "2018",
        },
        {
          src: "mac-pro.svg",
          name: "Mac Pro",
          models: "2019",
        },
      ],
    };
  },
};
</script>

<style>
.BodyColor {
  color: #c6c6c6;
}
.bg {
  background-image: url("../assets/background/01.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
