<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import form from "../mixins/composable";

interface Props {
  foo: string;
  bar?: number;
}

const { errors, save } = form();

// reactive destructure for defineProps()
// default value is compiled to equivalent runtime option
const { foo, bar = 100 } = defineProps<Props>();

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

emit('change', 123)

</script>

<template>
  <h1>Composition API</h1>
  <a href="https://github.com/vuejs/composition-api#readme" target="_blank">@vue/composition-api</a>
  <p>default value: {{ bar }}</p>
  <button @click="() => save()"></button>

  <p v-for="(error, i) in errors" :key="i"></p>
</template>
