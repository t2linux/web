<template>
  <div
    class="
      max-w-full
      mx-auto
      flex
      justify-center
    "
  >
    <div class="px-5">
      <div class="ContributorsCard">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div>
            <div class="grid grid-cols-4 md:grid-cols-4 gap-5 md:gap-0 mb-3">
              <div
                class="contributorLink"
                v-for="entry in contributors"
                v-bind:key="entry.index"
              >
                <a :href="entry.href" target="_blank">
                  <img
                    class="w-auto h-auto md:w-24 md:h-24 rounded-full"
                    :src="entry.img"
                    :alt="'Link to ' + entry.href"
                  />
                </a>
              </div>
            </div>
            <span class="text-white text-base md:text-2xl"
              >and many more...</span
            >
          </div>

          <div class="flex flex-col my-auto max-w-full md:max-w-lg">
            <span class="text-base md:text-4xl text-white"
              >Notable Contributors</span
            >
            <span class="sub"
              >The t2linux project is a community effort of people with
              knowledge in many different areas. You can help as well!</span
            >
            <div class="mt-3 flex flex-col md:flex-row gap-3">
              <a
                class="MatrixButton w-auto md:w-1/2"
                href="https://matrix.to/#/#space:t2linux.org"
                target="_blank"
              >
                <span class="m-auto text-lg text-black text-semibold"
                  >Join us on Matrix</span
                >
              </a>
              <a
                class="MatrixButton w-auto md:w-1/2"
                href="https://discord.com/invite/68MRhQu"
                target="_blank"
              >
                <span class="m-auto text-lg text-black text-semibold"
                  >Join us on Discord</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributors: [
        {
          img: "https://avatars.githubusercontent.com/u/60006035?v=4",
          href: "https://github.com/marcosfad",
        },
        {
          img: "https://avatars.githubusercontent.com/u/15999352?v=4",
          href: "https://github.com/mikeeq",
        },
        {
          img: "https://avatars.githubusercontent.com/u/133040?v=4",
          href: "https://github.com/roadrunner2",
        },
        {
          img: "https://avatars.githubusercontent.com/u/5191659?v=4",
          href: "https://github.com/MCMrARM",
        },
        {
          img: "https://avatars.githubusercontent.com/u/42888162?v=4",
          href: "https://github.com/networkException",
        },
        {
          img: "https://avatars.githubusercontent.com/u/2416915?v=4",
          href: "https://github.com/aunali1",
        },
        {
          img: "https://avatars.githubusercontent.com/u/69827514?v=4",
          href: "https://github.com/Redecorating",
        },
        {
          img: "https://avatars.githubusercontent.com/u/13283054?v=4",
          href: "https://github.com/JPyke3",
        },
      ],
    };
  },
};
</script>

<style>
.ContributorsCard {
  @apply p-7 md:p-12 rounded;
  background-color: rgba(46, 46, 46, 1);
}
.sub {
  color: #c6c6c6;
  @apply my-1 md:my-3 text-sm md:text-xl font-light;
}
.contributorLink {
  @apply my-0 md:my-5 transition-all duration-200 ease-in-out;

  filter: grayscale();
}

.contributorLink:hover {
  transform: scale(1.1);
  filter: none;
}
</style>
