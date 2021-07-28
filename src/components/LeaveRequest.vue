<template>
  <h4>Request a Leave</h4>
  <form class="row g-3">
    <div class="col-md-4">
      <label for="validationDefault01" class="form-label">Leave Type</label>
      <select class="form-select" v-model="reqArr.type" required>
        <option disabled value="">Select Leave Type</option>
        <option class="dropdown-item" value="Annual">Annual Leave</option>
        <option class="dropdown-item" value="Sick">Sick Leave</option>
        <option class="dropdown-item" value="Casual">Casual Leave</option>
        <option class="dropdown-item" value="Others">Others</option>
      </select>
      <input
        type="text"
        class="form-control"
        placeholder="Reason / Other leave type"
        v-model="reqArr.note"
      />
    </div>
    <div class="col-md-4">
      <label for="validationStartTime" class="form-label"></label>
      <span class="input-group-text"> Start Time</span>
      <DatePick class="form-control" v-model="date1" />
    </div>
    <div class="col-md-4">
      <label for="validationEndTime" class="form-label"></label>
      <span class="input-group-text"> End Time</span>
      <DatePick class="form-control" v-model="date2" />
    </div>
    <div class="col-md-3 mx-auto">
      <label class="form-label">Total Days: </label
      >{{
        Math.floor((reqArr.timestamp2 - reqArr.timestamp1) / (24 * 3600 * 1000))
      }}
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit" @click="sendDayOff">
        Send Requests
      </button>
    </div>
  </form>
</template>
<script>
import { dayOff } from "@/api/index.js";
import { reactive, ref, computed } from "vue";
import DatePick from "@/components/DatePick.vue";

export default {
  components: {
    DatePick,
  },
  setup() {
    const date1 = ref(new Date());
    const date2 = ref(new Date());
    const reqArr = reactive({
      note: "",
      timestamp1: computed(() => Date.parse(date1.value)),
      timestamp2: computed(() => Date.parse(date2.value)),
      type: "",
    });

    const sendDayOff = async () => {
      console.log(reqArr);
      const res = await dayOff(reqArr);
      const status = res.data.status;
      console.log(res);
      status === "ok" ? alert("sent successfully") : alert("Please try again");
    };

    return {
      date1,
      date2,
      sendDayOff,
      reqArr,
    };
  },
};
</script>

<style></style>
