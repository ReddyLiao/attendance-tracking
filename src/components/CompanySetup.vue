<template>
  <h4>Company Setting</h4>
  <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Company Name</label>
    <input
      type="text"
      class="form-control"
      id="formCompanyName"
      placeholder="Your Company Name "
    />
  </div>
  <div class="row g-3">
    <div class="col">
      <label class="form-label">Office Start Time</label>
      <input type="time" class="form-control" v-model="start" />
    </div>
    <div class="col">
      <label class="form-label">Office End Time</label>
      <input type="time" class="form-control" v-model="end" />
    </div>
    <div class="col">
      <label class="form-label">Buffer Time(minute)</label>
      <input type="number" class="form-control" v-model="infoArr.bufferTime" />
    </div>
  </div>
  <br />
  <h5>About Employee Leave</h5>
  <div class="row g-3">
    <div class="col">
      <label for="formEmployeeLeave" class="form-label"
        >Total Employee Leave</label
      ><input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formCasualLeave" class="form-label">Casual Leave</label>
      <input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formAnnualLeave" class="form-label">Annual Leave</label>
      <input type="number" class="form-control" />
    </div>
    <div class="col">
      <label for="formSickLeave" class="form-label">Sick Leave</label>
      <input type="number" class="form-control" />
    </div>
  </div>
  <br />
  <div class="col-12">
    <input
      class="btn btn-primary"
      type="submit"
      @click="saveUserInfo"
      value="Save"
    />
  </div>
</template>

<script>
import { setUserInfo } from "@/api/index.js";
import { reactive, computed, ref } from "@vue/reactivity";
export default {
  setup() {
    const start = ref();
    const end = ref();
    const infoArr = reactive({
      bufferTime: "",
      end: computed(() => end.value),
      start: computed(() => start.value),
    });
    const saveUserInfo = async () => {
      const res = await setUserInfo(infoArr);
      const status = res.data.status;
      console.log(res);
      if (status === "ok") {
        alert("Saved successfully");
      } else alert("Please try again");
    };
    return {
      start,
      end,
      infoArr,
      saveUserInfo,
    };
  },
};
</script>

<style></style>
