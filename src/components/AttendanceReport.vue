<template>
  <div class="tablesize">
    <div class="table-responsive">
      <table class="table mt-3">
        <thead>
          <h3>Attendance Report</h3>
          <hr />
          <tr>
            <th>Date</th>
            <th>Punch In Time</th>
            <th>Punch Out Time</th>
            <th>Working Time</th>
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
                  .replace("M", "分")
                  .split(".")[0] + "秒"
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      console.log(res);
      attendanceArr.value = res.data.body.content;
    };

    return {
      attendanceArr,
      getAttendanceList,
    };
  },
};
</script>
<style scoped>
.tablesize {
  width: 50%;
  margin-left: 180px;
}
</style>
