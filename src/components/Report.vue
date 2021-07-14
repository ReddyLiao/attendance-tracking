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
            <button
              type="button"
              class="btn btn-outline-success"
              @click="getReportList"
            >
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
        <tr v-for="content in attendanceArr" :key="content">
          <td>{{ content.key.date }}</td>

          <td>{{ content.startTime }}</td>
          <td>{{ content.endTime }}</td>
          <td>
            {{
              (content.duration || "")
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
      :page="getPage.page"
      :totalPages="totalPages"
      @changePage="changePage"
    />
  </div>
</template>
<script>
import { onMounted, ref, reactive, computed } from "vue";
import { attendanceList } from "@/api/index.js";
import DatePickRange from "@/components/DatePickRange.vue";
import Pagination from "@/components/Pagination.vue";
import { usePage } from "@/composition/page.js";
export default {
  components: { Pagination, DatePickRange },

  setup() {
    onMounted(() => {
      getAttendanceList();
    });
    const { getPage, totalPages } = usePage();
    const attendanceArr = ref([]);
    const getAttendanceList = async () => {
      const res = await attendanceList(getPage);
      attendanceArr.value = res.data.body.content;
      console.log(res);
      totalPages.value = res.data.body.totalPages;
    };
    // changpage
    let changePage = (page) => {
      getPage.page = page;
      getAttendanceList(getPage.value);
    };
    const range = ref(new Date());
    const dateRang = reactive({
      timestamp1: computed(() => Date.parse(range.value.start)),
      timestamp2: computed(() => Date.parse(range.value.end)),
    });
    const getReportList = async () => {
      const res = await attendanceList(dateRang);
      attendanceArr.value = res.data.body.content;
      totalPages.value = res.data.body.totalPages;
    };
   
    return {
      attendanceArr,
      getAttendanceList,
      range,
      dateRang,
      getReportList,
      getPage,
      changePage,
      totalPages,
    };
  },
};
</script>

<style scoped></style>
