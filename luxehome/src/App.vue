<template>
  <app-nav :open="open" @mouseenter="open = true"></app-nav>
  <div id="page" @mouseenter="open = false">
    <app-header @open-nav="open = !open"></app-header>
    <main>
      <router-view />
    </main>
    <footer></footer>
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
      open: false,
    };
  },
};
</script>
