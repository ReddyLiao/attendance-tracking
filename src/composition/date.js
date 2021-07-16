import { ref } from "@vue/runtime-core";
import { computed, reactive } from "vue";

export function useDate() {
  const range = ref(new Date());
  const date = reactive({
    timestamp1: computed(() => Date.parse(range.value.start)),
    timestamp2: computed(() => Date.parse(range.value.end)),
  });
  console.log(range.value.start);

  return {
    range,
    date,
  };
}
