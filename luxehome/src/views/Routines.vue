<template>
  <div></div>
</template>

<script>
export default {
  name: "PageRoutines",

  data() {
    return {
      routines: undefined,
    };
  },

  async mounted() {
    this.routines = await this.$api.getRoutines();
  },
};
</script>
