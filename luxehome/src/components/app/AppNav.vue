<template>
  <nav id="nav" class="nav" :class="{ closed }">
    <div class="nav__header"></div>
    <div class="nav__body"></div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",

  props: {
    closed: { type: Boolean },
  },
};
</script>
