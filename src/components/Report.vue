<template>
  <h3>Attendance Report</h3>
  <hr />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="d-flex align-items-center">
            <DatePickRange v-model="range" />
            <button class="btn btn-outline-success" @click="getReportList()">
              Search
            </button>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <router-link class="nav-link" to="/record/report">
            <button type="button" class="btn btn-success">
              Daily
            </button></router-link
          >
          <router-link class="nav-link" to="/report/reportWeekly">
            <button type="button" class="btn btn-success">
              Weekly
            </button></router-link
          >
          <router-link class="nav-link" to="/report/reportMonthly"
            ><button type="button" class="btn btn-success">
              Monthly
            </button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <div class="table-responsive">
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Punch In Time</th>
          <th>Punch Out Time</th>
          <th>Working Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item">
          <td>{{ item.key.date }}</td>
          <td>{{ item.startTime }}</td>
          <td>{{ item.endTime }}</td>
          <td>
            {{
              (item.duration || "")
                .replace("PT", "")
                .replace("H", ":")
                .replace("M", ":")
                .split(".")[0] + "S"
            }}
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Total Working Time</th>
          <th>{{ sumWorkingTime.hh }}hours</th>
          <th>{{ sumWorkingTime.mm }}minutes</th>
          <th>{{ parseInt(sumWorkingTime.ss) }}seconds</th>
        </tr>
      </thead>
    </table>
    <Pagination
      @getData="getData(attendanceList, currentSort)"
      :page="getPage.page"
      :totalPages="totalPages"
      @changePage="changePage"
    />
  </div>
</template>
<script>
import { onMounted, watch, ref, reactive, computed } from "vue";
import { attendanceList } from "@/api/index.js";
import DatePickRange from "@/components/DatePickRange.vue";
import Pagination from "@/components/Pagination.vue";
import { useSearch } from "@/composition/search.js";
export default {
  components: { Pagination, DatePickRange },

  setup() {
    onMounted(() => {
      currentSort.value = "key.date,desc";
      getData(attendanceList, currentSort.value);
      getSumWorkingTime();
    });
    const {
      currentSort,
      dateRang,
      getData,
      getPage,
      totalPages,
      data,
      timestamp1,
      timestamp2,
      changePage,
      sumWorkingTime,
    } = useSearch();
    watch(() => getData(attendanceList, currentSort.value));

    const range = ref(new Date());
    const getReportList = async () => {
      console.log(range.value.start);
      dateRang.timestamp1 = computed(() => Date.parse(range.value.start));
      dateRang.timestamp2 = computed(() => Date.parse(range.value.end));
      await getData(attendanceList, currentSort.value);
      getSumWorkingTime();
      console.log(workingTimeSort);
    };
    //total working time
    const workingTimeSort = reactive({
      size: 1000,
      timestamp1: "",
      timestamp: "",
      type: "work",
    });
    const durationArr = ref({});
    const getSumWorkingTime = async () => {
      workingTimeSort.timestamp1 = dateRang.timestamp1;
      workingTimeSort.timestamp2 = dateRang.timestamp2;
      const res = await attendanceList(workingTimeSort);
      durationArr.value = res.data.body.content.map((el) =>
        (el.duration || "")
          .replace("PT", "")
          .replace("H", ":")
          .replace("M", ":")
          .replace("S", "")
      );
      let hh = 0;
      let mm = 0;
      let ss = 0;
      for (const durationStr of durationArr.value.filter((s) => s.length > 0)) {
        let temp = durationStr.split(":");
        if (temp.length == 3) {
          hh = hh + new Number(temp[0]);
          mm = mm + new Number(temp[1]);
          ss = ss + new Number(temp[2]);
        } else if (temp.length == 2) {
          mm = mm + new Number(temp[0]);
          ss = ss + new Number(temp[1]);
        } else {
          ss = ss + new Number(temp[0]);
        }
      }
      sumWorkingTime.value = {
        hh: hh + parseInt(mm / 60),
        mm: (mm + parseInt(ss / 60)) % 60,
        ss: ss % 60,
      };
    };
    return {
      getSumWorkingTime,
      sumWorkingTime,
      range,
      dateRang,
      getReportList,
      getPage,
      totalPages,
      changePage,
      timestamp1,
      timestamp2,
      currentSort,
      data,
      getData,
    };
  },
};
</script>

<style scoped></style>
