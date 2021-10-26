<template>
  <div class="w-full mx-auto flex justify-center pb-0 md:pb-0">
    <div class="pb-0 md:pb-2 px-5">
      <div class="py-3 md:pt-40">
        <span class="Herotext"
          >Linux support for Apple devices <br />
          with the T2 security chip</span
        >
        <div class="flex flex-col md:flex-row justify-center my-5 md:my-20">
          <a
            class="StartButton mr-5"
            href="https://wiki.t2linux.org/"
            target="_blank"
          >
            <span class="m-auto">Get started</span>
          </a>

          <a
            class="GithubButton"
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
            src="../assets/screenshots/mbp-16-ubuntu.webp"
            class="transition-all duration-200 ease-in-out"
            alt=""
            v-show="currItem === 'default'"
            width="1122"
            height="690"
            srcset=""
          />

          <img
            src="../assets/screenshots/mbp-16-ubuntu.webp"
            class="transition-all duration-200 ease-in-out"
            v-show="currItem === 'ubuntu'"
            width="1122"
            height="690"
            alt=""
          />

          <img
            src="../assets/screenshots/mbp-16-arch.webp"
            class="transition-all duration-200 ease-in-out"
            v-show="currItem === 'arch'"
            width="1122"
            height="690"
            alt=""
          />

          <img
            src="../assets/screenshots/mbp-16-arch.webp"
            class="transition-all duration-200 ease-in-out"
            v-show="currItem === 'manjaro'"
            width="1122"
            height="690"
            alt=""
          />

          <div class="relative flex flex-row mt-1">
            <img
              @mouseover="showItem('manjaro')"
              src="../assets/icons/distributions/manjaro.svg"
              class="Manjaro md:block OpacityHover"
              alt=""
              srcset=""
            />

            <img
              @mouseover="showItem('arch')"
              src="../assets/icons/distributions/arch.svg"
              class="Arch md:block OpacityHover"
              alt=""
            />
            <img
              @mouseover="showItem('ubuntu')"
              src="../assets/icons/distributions/ubuntu.svg"
              class="Ubuntu md:block OpacityHover"
              alt=""
              sizes=""
              srcset=""
            />
          </div>
          <div class="flex flex-row justify-center md:hidden">
            <img
              @mouseover="showItem('manjaro')"
              src="../assets/icons/distributions/manjaro.svg"
              class="mr-3 opacity-80"
              alt=""
              srcset=""
            />

            <img
              @mouseover="showItem('arch')"
              src="../assets/icons/distributions/arch.svg"
              class="mr-3 opacity-80"
              alt=""
            />
            <img
              @mouseover="showItem('ubuntu')"
              src="../assets/icons/distributions/ubuntu.svg"
              class="opacity-80"
              alt=""
              sizes=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/background/shapes/torus.png"
      class="Shape1 hidden md:block"
      alt=""
    />
    <img
      src="../assets/background/shapes/cube.png"
      class="Shape2 hidden md:block"
      alt=""
    />
    <img
      src="../assets/background/shapes/circle.png"
      class="Shape3 hidden md:block"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currItem: "default",
    };
  },
  methods: {
    showItem: function(item) {
      this.currItem = item;
    },
  },
  mounted() {
    console.log(this.currItem);
  },
};
</script>

<style>
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

.Manjaro {
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
