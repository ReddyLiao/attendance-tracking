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
  <h4>Request a Leave</h4>

  <form class="row g-3">
    <div class="col-md-4">
      <label for="validationDefault01" class="form-label">Leave Type</label>
      <select class="form-select">
        <option selected>Select Leave Type</option>
        <option class="dropdown-item" value="Annual">Annual Leave</option>
        <option class="dropdown-item" value="Sick">Sick Leave</option>
        <option class="dropdown-item" value="Casual">Casual Leave</option>
        <option class="dropdown-item" value="Others">Others</option>
      </select>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with dropdown button"
        placeholder="Reason / Other leave type"
        required
      />
    </div>
    <div class="col-md-4">
      <label for="validationStartTime" class="form-label">Leave Time</label>
      <span class="input-group-text"> Start Time</span>
      <DatePick class="form-control" />
    </div>
    <div class="col-md-4">
      <label for="validationEndTime" class="form-label">　 </label>
      <span class="input-group-text"> End Time</span>
      <DatePick class="form-control" />
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Sum Time</button>
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label">Total Time</label>
    </div>
    <div class="col-md-3">
      <label for="validationDefault04" class="form-label">Days:</label>
    </div>
    <div class="col-md-3">
      <label for="validationDefault05" class="form-label">Hours:</label>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Send Requests</button>
    </div>
  </form>
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
