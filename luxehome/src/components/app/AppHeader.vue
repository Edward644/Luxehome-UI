<template>
  <header id="header" class="header">
    <img @click="$emit('open-nav')" src="images/menu_bars.svg" alt="" />
    <div>{{ $route.name }}</div>
    <div></div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
