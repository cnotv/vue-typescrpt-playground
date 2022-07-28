import Vue from "vue";

const message: MyType = "TS mixin";

export default Vue.extend({
  data() {
    return {
      message,
    };
  },
  created() {
    console.log(this.$data);
  },
});
