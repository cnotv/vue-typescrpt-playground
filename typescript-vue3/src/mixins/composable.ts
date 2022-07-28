// https://css-tricks.com/how-the-vue-composition-api-replaces-vue-mixins/
import { ref, computed } from "vue";

export const _CREATE = "create";

export default function () {
  const { mode } = defineProps<{ mode: string }>();
  const errors = ref([]);
  const isCreate = computed(() => mode === _CREATE);

  const done = () => {
    // router logic
  };
  const save = async (buttonDone: () => void) => {
    if (errors.value.length) {
      // some actions here
    }

    buttonDone;
  };

  return {
    mode,
    errors,
    isCreate,
    done,
    save,
  };
}
