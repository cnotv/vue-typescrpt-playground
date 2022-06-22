<script lang="ts">
import Vue, { PropType } from 'vue';

// Can't import model
interface MyData {
  foo: string;
}

export default Vue.extend({
  props: {
    myData: {
      type: Object as PropType<MyData>,
      default: () => null,
    },
    msg: {
      default: 'TS Options API',
    },
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
