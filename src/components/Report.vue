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
          <li class="nav-item"></li>
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

    return {
      attendanceArr,
      getAttendanceList,
    };
  },
};
</script>
<style scoped></style>
