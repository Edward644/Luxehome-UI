<template>
  <div class="card">
    <slot name="header" class="card__header">{{ header }}</slot>
    <slot name="body" class="card__body"></slot>
    <slot name="footer" class="card__footer"></slot>
  </div>
</template>

<script>
export default {
  name: "AppCard",

  props: {
    header: {
      type: String,
    },
  },
};
</script>
