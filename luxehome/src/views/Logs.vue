<template>
  <div>
    <card-logs :logs="logs" />
  </div>
</template>

<script>
import CardLogs from "@/components/cards/Logs.vue";

export default {
  name: "PageLogs",

  components: { CardLogs },

  data() {
    return {
      logs: undefined,
    };
  },

  async mounted() {
    this.logs = await this.$api.getLogs();
    this.logs.reverse();
  },
};
</script>
