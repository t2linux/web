<template>
  <Navbar />
  <Hero />
  <Distributions />
  <Devices />
  <Installation />
  <Contributors />
  <Footer />
</template>

<script>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Distributions from "./components/Distributions.vue";
import Devices from "./components/Devices.vue";
import Installation from "./components/Installation.vue";
import Contributors from "./components/Contributors.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Distributions,
    Devices,
    Installation,
    Contributors,
    Footer,
  },
};
</script>

<style>
/* inter-regular - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('assets/fonts/inter/inter-v3-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('assets/fonts/inter/inter-v3-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('assets/fonts/inter/inter-v3-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('assets/fonts/inter/inter-v3-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('assets/fonts/inter/inter-v3-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('assets/fonts/inter/inter-v3-latin-regular.svg#Inter') format('svg'); /* Legacy iOS */
}

/* inter-600 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url('assets/fonts/inter/inter-v3-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('assets/fonts/inter/inter-v3-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('assets/fonts/inter/inter-v3-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
    url('assets/fonts/inter/inter-v3-latin-600.woff') format('woff'), /* Modern Browsers */
    url('assets/fonts/inter/inter-v3-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
    url('assets/fonts/inter/inter-v3-latin-600.svg#Inter') format('svg'); /* Legacy iOS */
}

html {
  scroll-behavior: smooth;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #1a1a1a;
  overflow-x: hidden;
}

:root {
  color-scheme: dark;
}
</style>
