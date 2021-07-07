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
  <div>
    <h4>Request Leave</h4>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th>Leave Type</th>
          <div id="v-model-select" class="demo">
            <select v-model="selected">
              <option disabled value="">select</option>
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Other</option>
            </select>
          </div>
        </tr>
        <tr>
          <td>Start Timek</td>
          <DatePick />
        </tr>
        <tr>
          <td>End Time</td>
          <DatePick />
          <td><button>Count</button></td>
        </tr>
        <tr>
          <td>Total Time</td>
          <td>Days:</td>
          <td>Hours:</td>
        </tr>
        <tr>
          <button>Send</button>
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
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style></style>
