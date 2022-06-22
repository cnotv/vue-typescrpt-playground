<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  foo: string;
  bar?: number;
}

// reactive destructure for defineProps()
// default value is compiled to equivalent runtime option
const { foo, bar = 100 } = defineProps<Props>();
</script>

<template>
  <h1>Composition API</h1>
  <a href="https://github.com/vuejs/composition-api#readme" target="_blank">@vue/composition-api</a>
  <p>default value: {{ bar }}</p>
</template>
