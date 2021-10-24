<template>
  <div class="max-w-full mx-auto flex justify-center">
    <div class="py-14 md:py-40 px-5">
      <span class="TitleText">Distributions with first class Support</span>
      <div class="flex flex-col md:flex-row justify-center">
        <span class="BodyText px-0 md:px-12">
          Linux distributions documented in the t2linux wiki
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-5 md:mt-14">
        <a
          v-for="item in distributions"
          v-bind:key="item.index"
          :href="item.href"
        >
          <div class="DistroCard">
            <div class="flex items-center py-2">
              <img
                :src="require(`../assets/icons/distributions/` + item.src)"
                class="w-8 h-8 md:w-auto md:h-auto"
                alt=""
              />
              <span class="DistroName">{{ item.name }}</span>
            </div>
            <div>
              <img
                src="../assets/icons/redirect.svg"
                class="hover:opacity-70 transition-all duration-200 ease-in-out"
                :alt="'Icon for ' + item.name"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distributions: [
        {
          src: "ubuntu.svg",
          name: "Ubuntu",
          href: "https://wiki.t2linux.org/distributions/ubuntu/home/",
        },
        {
          src: "manjaro.svg",
          name: "Manjaro",
          href: "https://wiki.t2linux.org/distributions/manjaro/home/",
        },
        {
          src: "arch.svg",
          name: "Arch Linux",
          href: "https://wiki.t2linux.org/distributions/arch/installation/",
        },
      ],
      open(url) {
        window.location.href = url;
      },
    };
  },
};
</script>

<style>
.TitleText {
  @apply text-center text-white font-bold block text-xl md:text-section md:leading-section;
}
.BodyText {
  color: #c6c6c6;
  @apply text-center mt-1 md:mt-5 text-sm md:text-base font-light;
}
.DistroCard {
  background-color: #2e2e2e;
  cursor: pointer;
  @apply p-5 md:p-8 flex items-center justify-between rounded-lg transition-all ease-in-out duration-200;
}
.DistroCard:hover {
  transform: scale(1.05);
  @apply shadow-2xl;
}
.DistroName {
  @apply text-base md:text-2xl text-white mx-3;
}
</style>
