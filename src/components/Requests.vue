<template>
  <h1>Leave Requests</h1>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Total Leave</th>
        <th scope="col">Annual Leave</th>
        <th scope="col">Sick Leave</th>
        <th scope="col">Casual Leave</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <div>
    <h4>Request Leave</h4>
    <table class="table table-borderless">
      <thead></thead>
      <tbody>
        <tr>
          <th>Leave Type</th>
          <th></th>
        </tr>
        <tr>
          <td>Start Timek</td>
          <DatePick />
        </tr>
        <tr>
          <td>End Time</td>
          <DatePick />
        </tr>
        <tr>
          <td>Total Time</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import DatePick from "@/components/DatePick.vue";
export default {
  components: {
    DatePick,
  },
};
</script>

<style></style>
