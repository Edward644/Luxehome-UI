<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event of events" :key="event.id">
          <td>{{ event.name }}</td>
          <td>{{ event.event }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PageEvents",

  data() {
    return {
      events: undefined,
    };
  },

  async mounted() {
    this.events = await this.$api.getEvents();
  },
};
</script>
