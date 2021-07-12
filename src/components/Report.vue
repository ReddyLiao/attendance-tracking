<template>
  <h3>Attendance Report</h3>
  <hr />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>

      <div class="collapse navbar-collapse">
        <!-- Left links -->

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <span class="mx-2">Starts</span>
            <input
              type="date"
              class="form-control me-2"
              :value="timestamp1"
              @input="$emit('update:timestamp1', $event.target.value)"
              :max="today"
            />
            <span class="mx-2">Ends</span>
            <input
              type="date"
              class="form-control me-2"
              :value="timestamp2"
              @input="$emit('update:timestamp2', $event.target.value)"
              :max="today"
            />
            <button
              class="btn btn-primary"
              @click="getWithdraw(currentSort, 'search')"
            >
              Search
            </button> -->
          </li>
        </ul>
        <!-- Left links -->
        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-success">Daily</button>
          <button type="button" class="btn btn-success">Weekly</button>
          <button type="button" class="btn btn-success">Monthly</button>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
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
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { attendanceList } from "@/api/index.js";

export default {
  components: {},
  setup() {
    onMounted(() => {
      getAttendanceList();
    });
    const attendanceArr = ref([]);
    const getAttendanceList = async () => {
      const res = await attendanceList();
      attendanceArr.value = res.data.body.content;
    };
    // sort;
    // const date = "2021-07-06";
    // router.push({ path: "searchresult", query: { date: `${date}` } });
    return {
      attendanceArr,
      getAttendanceList,
    };
  },
};
</script>
<style scoped></style>
