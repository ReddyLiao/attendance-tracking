import { ref, reactive } from "vue";

export function usePage() {
  const getPage = reactive({
    page: 0,
    size: 10,
  });
  const totalPages = ref(0);
  return {
    getPage,
    totalPages,
  };
}
