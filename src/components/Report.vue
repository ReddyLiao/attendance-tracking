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
        <!-- Left links -->
        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-success">Daily</button>
          <button type="button" class="btn btn-success">Weekly</button>
          <button type="button" class="btn btn-success">Monthly</button>
        </div>
      </div>
    </div>
  </nav>
  <div class="table-responsive">
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Punch In Time</th>
          <th>Punch Out Time</th>
          <th>Working Time</th>
          <th>Total Working Time</th>
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
    } = useSearch();
    watch(() => getData(attendanceList, currentSort.value));

    const range = ref(new Date());
    const getReportList = async () => {
      dateRang.timestamp1 = computed(() => Date.parse(range.value.start));
      dateRang.timestamp2 = computed(() => Date.parse(range.value.end));
      console.log(range.value.start);

      await getData(attendanceList, currentSort.value);
    };
    return {
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
      attendanceList,
    };
  },
};
</script>

<style scoped></style>
