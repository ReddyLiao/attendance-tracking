<template>
  <h4>Company Setting</h4>
  <form class="row g-3">
    <div class="col-md-4 mx-auto text-start">
      <label for="formGroupExampleInput" class="form-label">Company Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Your Company Name "
      />
    </div>
    <div class="row g-3 text-start">
      <div class="col">
        <label class="form-label text-start">Office Start Time</label>
        <input type="time" class="form-control" v-model="start" required />
      </div>
      <div class="col">
        <label class="form-label">Office End Time</label>
        <input type="time" class="form-control" v-model="end" required />
      </div>
      <div class="col">
        <label class="form-label">Buffer Time(minute)</label>
        <input
          type="number"
          class="form-control"
          v-model="infoArr.bufferTime"
        />
      </div>
    </div>
    <hr />
    <h4>Employee Leave</h4>

    <div class="col">
      <label for="formAnnualLeave" class="form-label">Annual Leave</label>
      <input
        type="number"
        class="form-control"
        placeholder="0"
        v-model="infoArr.originAnnualLeave"
      />
    </div>
    <div class="col">
      <label for="formCasualLeave" class="form-label">Casual Leave</label>
      <input
        type="number"
        class="form-control"
        placeholder="0"
        v-model="infoArr.originCasualLeave"
      />
    </div>
    <div class="col">
      <label for="formSickLeave" class="form-label">Sick Leave</label>
      <input
        type="number"
        class="form-control"
        placeholder="0"
        v-model="infoArr.originSickLeave"
      />
    </div>
    <div class="col">
      <label for="formEmployeeLeave" class="form-label"
        >Total Employee Leave</label
      ><br /><span class="form-control">{{
        new Number(infoArr.originAnnualLeave) +
        new Number(infoArr.originCasualLeave) +
        new Number(infoArr.originSickLeave)
      }}</span>
    </div>
    <br />
    <div class="col-12">
      <button class="btn btn-primary" type="submit" @click="saveUserInfo">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { setUserInfo } from "@/api/index.js";
import { reactive, computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const start = ref();
    const end = ref();
    const infoArr = reactive({
      originAnnualLeave: "",
      originCasualLeave: "",
      originSickLeave: "",
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
        store.dispatch("getUserInfo");
      } else alert("Please try again");
    };
    return {
      start,
      end,
      infoArr,
      saveUserInfo,
      userInfoArr: computed(() => store.getters.getUserInfo),
    };
  },
};
</script>

<style></style>
