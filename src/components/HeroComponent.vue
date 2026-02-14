<template>
  <div class="w-full mx-auto flex justify-center pb-0 md:pb-0">
    <div class="pb-0 md:pb-2 px-5">
      <div class="py-3 md:pt-40">
        <span class="Herotext">Linux support for Apple devices <br>
          with the T2 security chip</span>
        <div class="flex flex-col md:flex-row justify-center my-5 md:my-20">
          <a
            class="StartButton mr-5 z-10"
            href="https://wiki.t2linux.org/"
            target="_blank"
          >
            <span class="m-auto">Get started</span>
          </a>

          <a
            class="GithubButton z-10"
            href="https://github.com/t2linux"
            target="_blank"
          >
            <span class="m-auto">Github</span>
          </a>
        </div>

        <div
          class="pt-5 md:pt-14 relative transition-all duration-200 ease-in-out"
        >
          <img
            v-show="currItem === 'default'"
            src="../assets/screenshots/mbp-16-ubuntu.webp"
            class="transition-all duration-200 ease-in-out"
            alt=""
            width="1122"
            height="690"
            srcset=""
          >

          <img
            v-show="currItem === 'ubuntu'"
            src="../assets/screenshots/mbp-16-ubuntu.webp"
            class="transition-all duration-200 ease-in-out"
            width="1122"
            height="690"
            alt=""
          >

          <img
            v-show="currItem === 'arch'"
            src="../assets/screenshots/mbp-16-arch.webp"
            class="transition-all duration-200 ease-in-out"
            width="1122"
            height="690"
            alt=""
          >

          <img
            v-show="currItem === 'fedora'"
            src="../assets/screenshots/mbp-16-fedora.webp"
            class="transition-all duration-200 ease-in-out"
            width="1122"
            height="690"
            alt=""
          >

          <div class="relative flex flex-row mt-1">
            <img
              src="../assets/icons/distributions/ubuntu.svg"
              class="Ubuntu md:block OpacityHover"
              alt=""
              srcset=""
              @mouseover="showItem('ubuntu')"
            >

            <img
              src="../assets/icons/distributions/fedora.svg"
              class="Fedora md:block OpacityHover"
              alt=""
              srcset=""
              @mouseover="showItem('fedora')"
            >

            <img
              src="../assets/icons/distributions/arch.svg"
              class="Arch md:block OpacityHover"
              alt=""
              @mouseover="showItem('arch')"
            >
          </div>
          <div class="flex flex-row justify-center md:hidden">
            <img
              src="../assets/icons/distributions/fedora.svg"
              class="mr-3 opacity-80"
              alt=""
              srcset=""
              @mouseover="showItem('Fedora')"
            >

            <img
              src="../assets/icons/distributions/arch.svg"
              class="mr-3 opacity-80"
              alt=""
              @mouseover="showItem('arch')"
            >
            <img
              src="../assets/icons/distributions/ubuntu.svg"
              class="opacity-80"
              alt=""
              sizes=""
              srcset=""
              @mouseover="showItem('ubuntu')"
            >
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/background/shapes/torus.png"
      class="Shape1 hidden md:block z-0"
      alt=""
    >
    <img
      src="../assets/background/shapes/cube.png"
      class="Shape2 hidden md:block z-0"
      alt=""
    >
    <img
      src="../assets/background/shapes/circle.png"
      class="Shape3 hidden md:block z-0"
      alt=""
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      currItem: "default",
    };
  },
  mounted() {
    console.log(this.currItem);
  },
  methods: {
    showItem: function(item) {
      this.currItem = item;
    },
  },
};
</script>

<style>
@reference "../styles/index.scss";
.Herotext {
  @apply text-center text-white font-bold block text-xl md:text-hero md:leading-hero;
}

.StartButton {
  @apply mb-4 md:mb-0 w-full md:w-auto text-white rounded flex transition-all ease-in-out duration-200 bg-neutral hover:bg-neutral-600 h-12;
  padding: 8px 36px;
}

.GithubButton {
  @apply w-full md:w-auto text-white rounded flex transition-all ease-in-out duration-200 bg-transparent hover:bg-gray-800 h-12;
  padding: 8px 36px;
  border: 1px solid #ffffff;
}

.Shape1 {
  position: absolute;
  width: 124px;
  height: 124px;
  left: 300px;
  top: 390px;
  transform: translatey(10px);
  animation: float 4s ease-in-out infinite;
}

.Shape2 {
  position: absolute;
  width: 89px;
  height: 89px;
  left: 1500px;
  top: 204px;
  transform: translatey(5px);
  animation: float 5s ease-in-out infinite;
}

.Shape3 {
  position: absolute;
  width: 129px;
  height: 129px;
  left: 1300px;
  top: 499px;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.OpacityHover {
  @apply transition-all ease-in-out duration-200 hidden;
}

.OpacityHover:hover {
  opacity: 0.8;
}

.Fedora {
  position: relative;
  bottom: 10rem;
  left: 30rem;
  @apply mr-3;
}

.Arch {
  position: relative;
  bottom: 10rem;
  left: 30rem;
  @apply mr-3;
}

.Ubuntu {
  position: relative;
  bottom: 10rem;
  left: 30rem;
  @apply mr-3;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
