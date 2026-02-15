<template>
  <div
    class="
      transition-all
      duration-200
      flex flex-col
      md:flex-row
      py-5
      md:py-8
      px-5
      text-white
      justify-between
      shadow-xs
      md:px-6
      lg:px-52
    "
  >
    <div class="flex justify-between md:w-auto text-lg text-gray-700">
      <a href="/"
        ><img src="../assets/icons/t2linux.webp" class="h-10 max-w-none w-10" alt="t2linux icon"
      /></a>

      <button
        class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
        @click="open = !open"
      >
        <svg fill="gray" viewBox="0 0 20 20" class="w-6 h-6">
          <path
            v-if="!open"
            fill-rule="evenodd"
            class="text-neutral-200"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-if="open"
            fill-rule="evenodd"
            class="text-neutral-200"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <transition name="dropdown">
      <nav
        :class="open ? 'flex Navmenubg rounded-lg px-3 mt-2' : 'hidden'"
        class="flex-col flex-grow py-3"
        v-if="open"
      >
        <a
          class="NavbarMobileItem text-neutral-200"
          v-for="item in arr"
          v-bind:key="item.index"
          :href="item.href"
          :target="
            item.href === '/' || item.href === '#Installation' ? '' : '_blank'
          "
        >
          {{ item.title }}
        </a>
        <a
          class="MatrixButton w-full"
          href="https://matrix.to/#/#space:t2linux.org"
          target="_blank"
        >
          <img
            src="../assets/icons/matrix-wordmark.svg"
            alt=""
            srcset=""
            class="m-auto matrix"
          />
        </a>
        <a
          class="DiscordButton w-full"
          href="https://discord.com/invite/68MRhQu"
          target="_blank"
        >
          <img
            src="../assets/icons/discord-wordmark.svg"
            alt=""
            srcset=""
            class="m-auto"
          />
        </a>
      </nav>
    </transition>

    <span class="w-full justify-center hidden md:flex ml-0 lg:ml-32">
      <a
        class="NavItem"
        v-for="item in arr"
        v-bind:key="item.index"
        :href="item.href"
        :target="
          item.href === '/' || item.href === '#Installation' ? '' : '_blank'
        "
      >
        {{ item.title }}
      </a>
    </span>

    <div class="hidden md:flex items-center gap-3">
      <a
        class="MatrixButton"
        href="https://matrix.to/#/#space:t2linux.org"
        target="_blank"
      >
        <img
          src="../assets/icons/matrix-wordmark.svg"
          alt=""
          srcset=""
          class="m-auto w-auto matrix"
        />
      </a>
      <a
        class="DiscordButton"
        href="https://discord.com/invite/68MRhQu"
        target="_blank"
      >
        <img
          src="../assets/icons/discord-wordmark.svg"
          alt=""
          srcset=""
          class="m-auto w-auto"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      arr: [
        {
          href: "/",
          title: "Home",
        },
        {
          href: "https://wiki.t2linux.org/",
          title: "Wiki",
        },
        {
          href: "#Installation",
          title: "Installation",
        },
      ],
    };
  },
};
</script>

<style>
.MatrixButton {
  @apply w-full rounded flex transition-all ease-in-out bg-white duration-200 my-2 md:my-0;
  height: 50px;
  width: 120px;
}

.DiscordButton {
  @apply w-full rounded flex transition-all ease-in-out duration-200 bg-neutral hover:bg-neutral-600 my-2 md:my-0;
  height: 50px;
  width: 120px;
}

.NavItem {
  color: rgba(255, 255, 255, 0.5);
  @apply mx-3 py-2 transition-all duration-200 ease-in-out whitespace-nowrap hover:text-white;
}

.Navmenubg {
  background-color: #ffffff10 !important;
}

.NavbarMobileItem {
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  @apply font-medium py-2 transition duration-150 ease-in-out whitespace-nowrap hover:text-gray-300;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0 !important;
  transform: translateY(30px) !important;
}

.matrix {
  filter: invert(1)
}
</style>
