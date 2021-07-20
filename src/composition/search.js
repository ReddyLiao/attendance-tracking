import { usePage } from "@/composition/page.js";
import { ref, reactive, computed } from "vue";

export function useSearch() {
  const currentSort = ref("");
  const dateRang = reactive({
    timestamp1: "",
    timestamp2: "",
  });

  const { getPage, totalPages } = usePage();
  // const { range, date } = useDate();
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
    //total working time 依照頁碼資料顯示,非日期範圍
    // durationArr.value = data.value.map((el) =>
    //   (el.duration || "")
    //     .replace("PT", "")
    //     .replace("H", ":")
    //     .replace("M", ":")
    //     .replace("S", "")
    // );
    // let hh = 0;
    // let mm = 0;
    // let ss = 0;
    // // console.log(durationArr.value.filter((s) => s.length > 0));
    // for (const durationStr of durationArr.value.filter((s) => s.length > 0)) {
    //   let temp = durationStr.split(":");
    //   if (temp.length == 3) {
    //     hh = hh + new Number(temp[0]);
    //     mm = mm + new Number(temp[1]);
    //     ss = ss + new Number(temp[2]);
    //   } else {
    //     ss = ss + new Number(temp[0]); //之後可刪
    //   }
    // }
    // sumWorkingTime.value = {
    //   hh: hh + parseInt(mm / 60),
    //   mm: (mm + parseInt(ss / 60)) % 60,
    //   ss: ss % 60,
    // };
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
