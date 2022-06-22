<script lang="ts">
import { defineComponent } from '@vue/composition-api';

// defineProps is still missing
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'TS Composition API',
    },
  },
});
</script>

<template>
  <h1>{{ msg }} <a href="https://github.com/vuejs/composition-api#readme" target="_blank">@vue/composition-api</a></h1>
</template>
