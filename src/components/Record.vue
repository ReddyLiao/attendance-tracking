<template>
  <h1>Record</h1>
  <DailyRecord />
  <div>
    <p></p>
    <button type="button" class="btn btn-outline-warning">Report</button>
    <!-- <Report /> -->
    <router-link class="nav-link" href="#" to="/Report"
      ><button type="button" class="btn btn-outline-warning">
        Report
      </button></router-link
    >
  </div>
</template>

<script>
import router from "@/router";
import DailyRecord from "./DailyRecord.vue";
export default {
  components: {
    DailyRecord,
  },
};
</script>

<style></style>
