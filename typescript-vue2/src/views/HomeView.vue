<template>
  <div class="home">
    <CompositionApi/>
    <OptionsApi/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CompositionApi from '@/components/CompositionApi.vue'; // @ is an alias to /src
import OptionsApi from '@/components/OptionsApi.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    CompositionApi,
    OptionsApi,
  },
});
</script>
