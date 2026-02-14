<template>
  <NavbarComponent />
  <HeroComponent />
  <DistributionsComponent />
  <DevicesComponent />
  <InstallationComponent />
  <ContributorsComponent />
  <FooterComponent />
</template>

<script>
import HeroComponent from "./components/HeroComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import DistributionsComponent from "./components/DistributionsComponent.vue";
import DevicesComponent from "./components/DevicesComponent.vue";
import InstallationComponent from "./components/InstallationComponent.vue";
import ContributorsComponent from "./components/ContributorsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    HeroComponent,
    DistributionsComponent,
    DevicesComponent,
    InstallationComponent,
    ContributorsComponent,
    FooterComponent,
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
