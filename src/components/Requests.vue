<template>
  <h1>Leave Requests</h1>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Annual Leave</th>
          <th scope="col">Sick Leave</th>
          <th scope="col">Casual Leave</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col">Total Allowance (Days)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="col">Allowance Remaining (Days)</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <LeaveRequest />
</template>
<script>
import LeaveRequest from "@/components/LeaveRequest.vue";
export default {
  components: {
    LeaveRequest,
  },
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style></style>
