<template>
  <nav id="nav" class="nav" :class="{ open }">
    <div class="nav__header"></div>
    <div class="nav__body">
      <div
        v-for="link of links"
        :key="link.link"
        @click="$router.push({ name: link.link })"
      >
        {{ link.label }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",

  props: {
    open: { type: Boolean },
  },

  computed: {
    links() {
      return [
        { label: "Routines", link: "routines" },
        { label: "Events", link: "events" },
        { label: "Tasks", link: "tasks" },
      ];
    },
  },
};
</script>
