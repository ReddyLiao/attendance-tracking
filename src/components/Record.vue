<template>
  <h1>Record</h1>
  <DailyRecord />
  <!-- <AttendanceReport /> -->
</template>

<script>
import DailyRecord from "./DailyRecord.vue";
import AttendanceReport from "@/components/AttendanceReport.vue";
export default {
  components: {
    DailyRecord,
    AttendanceReport,
  },
};
</script>

<style></style>
