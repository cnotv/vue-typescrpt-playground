<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

interface Book {
  title: string;
  author: string;
  year: number;
}

export default defineComponent({
  props: {
    book: {
      // provide more specific type to `Object`
      type: Object as PropType<Book>,
      required: true,
    },
    msg: String,
    // can also annotate functions
    callback: Function as PropType<(id: number) => void>,
  },
  mounted() {
    this.book.title; // string
    this.book.year; // number

    // TS Error: argument of type 'string' is not
    // assignable to parameter of type 'number'
    // this.callback?.("123");
  },
});
</script>

<template>
  <h1>Options API</h1>
</template>
