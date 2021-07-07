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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in attendanceArr" :key="item">
            <td>{{ +1 }}</td>
            <td>{{ item.content.key.date }}</td>
            <td>{{ item.content.startTime }}</td>
            <td>{{ item.content.endTime }}</td>
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
  width: 75%;
  margin-left: 180px;
}
</style>
