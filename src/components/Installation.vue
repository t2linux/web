<template>
  <div class="max-w-full mx-auto flex justify-center" id="Installation">
    <div class="py-14 md:py-40 px-5">
      <div>
        <span class="TitleText">Installation Roadmap</span>
      </div>
      <div class="flex flex-col md:flex-row justify-center">
        <span class="BodyText w-full md:w-2/3"
          >This article is meant to guide users through the wiki by giving an
          overview over the required steps to get to a working
          installation.</span
        >
      </div>

      <div
        class="
          flex
          justify-center
          mx-auto
          mt-5
          md:mt-14
          text-white
          w-full
          md:w-4/5
        "
      >
        <div v-html="markdownToHtml" class="markdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      markdown: "",
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.markdown);
    },
  },
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/t2linux/wiki/master/docs/roadmap.md"
    )
      .then(response => response.text())
      .then(data => (this.markdown = data));
  },
};
</script>

<style>
.markdown {
  @apply md:px-52 font-light;
}

.markdown p {
  color: #c6c6c6;
  @apply my-3;
}

.markdown h2 {
  color: white;
  @apply mt-12 text-2xl font-semibold mb-5;
}

.markdown h1 {
  @apply hidden;
}

.markdown h1 + p {
  @apply hidden;
}

.markdown a {
  color: rgba(118, 99, 232, 1);
}

.markdown ul li {
  @apply my-5;
  color: #c6c6c6;
  list-style: inside;
}
</style>
