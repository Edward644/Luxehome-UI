<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(field, index) of p_fields" :key="index" class="">
          {{ field.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) of p_items" :key="index" :class="item.variant">
        <td
          v-for="(field, f_index) of p_fields"
          :key="f_index"
          :class="`${getTdClass(item, field.tdClass)}`"
        >
          <slot
            :name="`cell(${field.key})`"
            :data="{ item, value: item[field.key] }"
          >
            <slot name="cell()" :data="{ item, value: item[field.key] }">
              {{ item[field.key] }}
            </slot>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AppTable",

  props: {
    fields: { type: Array, required: false },
    items: { type: Array, required: true },
  },

  computed: {
    p_fields() {
      const fields = this.fields ?? Object.keys(this.items[0]);

      return fields?.map((f) => ({
        key: f.key ?? f,
        label: f.label ?? f.key ?? f,
        // headerTitle: f.headerTitle,
        // headerAbbr: f.headerAbbr,
        class: f.class,
        // formatter: f.formatter,
        sortable: f.sortable ?? false,
        // sortKey: f.sortKey,
        // sortDirection: f.sortDirection,
        // sortByFormatted: f.sortByFormatted,
        // filterByFormatted: f.filterByFormatted,
        tdClass: f.tdClass,
        // thClass: f.thClass,
        // thStyle: f.thStyle,
        // variant: f.variant,
        // thAttr: f.thAttr,
        // isRowHeader: f.isRowHeader,
        // stickyColumn: f.stickyColumn,
      }));
    },

    labels() {
      return this.p_fields.map(({ key }) => key);
    },

    p_items() {
      return this.items.map((item) => ({ ...item }));
    },
  },

  methods: {
    getTdClass(item, cb) {
      if (typeof cb === "function") return cb(item);
      else if (Array.isArray(cb)) return cb.join(" ");
      return cb;
    },
  },
};
</script>
