<template>
  <app-card header="Logs">
    <template #body>
      <app-table v-if="logs" :fields="fields" :items="logs"></app-table>
    </template>
  </app-card>
</template>

<script>
import AppCard from "@/components/app/AppCard.vue";
import AppTable from "@/components/app/AppTable.vue";

export default {
  name: "CardLogs",

  components: { AppCard, AppTable },

  props: { logs: { type: Array } },

  computed: {
    fields() {
      return [
        { key: "created" },
        { key: "level", tdClass: "text-upper" },
        { key: "message" },
      ];
    },
  },
};
</script>
