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
      <span>{{ selected }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="Reason / Other leave type"
        v-model="reason"
      />
      <span>{{ reason }}</span>
      <!-- required -->
    </div>
    <div class="col-md-4">
      <label for="validationStartTime" class="form-label">Leave Time</label>
      <span class="input-group-text"> Start Time</span>
      <div class="form-control">
        <DatePick class="form-control" v-model="date1" />
      </div>
      <span>{{ date1 }}</span>
    </div>
    <div class="col-md-4">
      <label for="validationEndTime" class="form-label">　 </label>
      <span class="input-group-text"> End Time</span>
      <DatePick class="form-control" v-model="date2" />
      <span>{{ date2 }}</span>
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
      <button class="btn btn-primary" type="submit" @click="test">
        Send Requests
      </button>
    </div>
  </form>
</template>
<script>
import { dayOff } from "@/api/index.js";
import { reactive, ref } from "vue";
import DatePick from "@/components/DatePick.vue";
export default {
  components: {
    DatePick,
  },
  data() {
    let date1 = new Date();
    let date2 = new Date();

    return {
      selected: "",
      reason: "",
      date1,
      date2,
    };
  },
  setup() {
    let inputData = {
      selected: "",
    };
    const requestArr = reactive({
      note: "",
      timestamp1: "",
      timestamp2: "",
      type: "",
    });
    // const dayOff = reactive({
    //   note: "string",
    //   timestamp1: "string",
    //   timestamp2: "string",
    //   type: "string",
    // });
    // const sendDayOff = async () => {
    //   const ref = await dayOff();
    // };
    const test = () => {
      let data = {
        selected: "",
        reason: "",
      };
      console.log(inputData);
    };
    return {
      inputData,
      requestArr,
      test,
    };
  },
};
</script>

<style></style>
