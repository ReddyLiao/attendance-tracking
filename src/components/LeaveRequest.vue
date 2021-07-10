<template>
  <h4>Request a Leave</h4>
  <form class="row g-3">
    <div class="col-md-4">
      <label for="validationDefault01" class="form-label">Leave Type</label>
      <select class="form-select" v-model="selected">
        <option disabled value="">Select Leave Type</option>
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
      />
      <!-- required -->
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
      <button class="btn btn-primary" type="button">Sum Time</button>
    </div>
    <div class="col-md-6">
      <label class="form-label">Total Time</label>
    </div>
    <div class="col-md-3">
      <label class="form-label">Days:</label>
    </div>
    <div class="col-md-3">
      <label class="form-label">Hours:</label>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Send Requests</button>
    </div>
  </form>
</template>
<script>
import { dayOff } from "@/api/index.js";
import { reactive } from "vue";
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
  setup() {
    // const dayOff = reactive({
    //   note: "string",
    //   timestamp1: "string",
    //   timestamp2: "string",
    //   type: "string",
    // });
    // const sendDayOff = async () => {
    //   const ref = await dayOff();
    // };
  },
};
</script>

<style></style>
