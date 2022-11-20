<template>
  <app-nav :closed="closed" @mouseenter="closed = false"></app-nav>
  <div id="page" @mouseenter="closed = true">
    <app-header></app-header>
    <main>jkgkjg</main>
    <footer>hjgkyugku</footer>
  </div>
</template>

<script>
import AppNav from "@/components/app/AppNav.vue";
import AppHeader from "@/components/app/AppHeader.vue";

export default {
  name: "App",

  components: { AppNav, AppHeader },

  data() {
    return {
      closed: true,
    };
  },
};
</script>
