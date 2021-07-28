import { usePage } from "@/composition/page.js";
import { ref, reactive } from "vue";

export function useSearch() {
  const currentSort = ref("");
  const dateRang = reactive({
    timestamp1: "",
    timestamp2: "",
  });

  const { getPage, totalPages } = usePage();
  const data = ref([]);
  const durationArr = ref({});
  const sumWorkingTime = ref({});
  const getData = async (api, sortType, search) => {
    if (search === "search") {
      getPage.page = 0;
    }
    currentSort.value = sortType;
    getPage.sort = sortType;
    getPage.timestamp1 = dateRang.timestamp1;
    getPage.timestamp2 = dateRang.timestamp2;
    const res = await api(getPage);
    data.value = res.data.body.content;
    totalPages.value = res.data.body.totalPages;
  };
  const changePage = (page) => {
    getPage.page = page;
  };
  return {
    durationArr,
    sumWorkingTime,
    currentSort,
    getData,
    getPage,
    totalPages,
    data,
    dateRang,
    changePage,
  };
}
