<template>
  <div class="max-w-6xl mx-auto">
    <div class="py-5 md:py-16 mx-auto">
      <div class="footer">
        <div class="flex flex-col">
          <span
            class="BodyText text-left cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out my-0"
            >© 2021-2026 t2linux.org</span
          >
          <span
            class="BodyText text-left cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out my-0"
          >
            Device icons by iconfield from the Noun Project
          </span>
        </div>

        <div class="flex BodyText items-center">
          <a
            target="_blank"
            href="https://matrix.to/#/#space:t2linux.org"
            class="flex items-center mx-4 linkhover my-2 md:my-0"
            ><img
              src="../assets/icons/matrix.svg"
              class="mr-2 matrix"
              alt=""
            />Matrix</a
          >
          <a
            target="_blank"
            href="https://discord.com/invite/68MRhQu"
            class="flex items-center mx-4 linkhover my-2 md:my-0"
            ><img
              src="../assets/icons/discord.svg"
              class="mr-2"
              alt=""
            />Discord</a
          >
          <a
            target="_blank"
            href="https://github.com/t2linux"
            class="flex items-center linkhover mx-4 my-2 md:my-0"
            ><img
              src="../assets/icons/github.svg"
              class="mr-2"
              alt=""
            />Github</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  @apply flex flex-col md:flex-row justify-center md:justify-between items-center align-middle;
}

.linkhover {
  @apply transition-all duration-200 ease-in-out;
}

.linkhover:hover {
  @apply opacity-70;
}

.matrix {
  filter: invert(1);
}
</style>
