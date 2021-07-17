<template>
  <h1>Leave Requests</h1>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Annual Leave</th>
          <th scope="col">Casual Leave</th>
          <th scope="col">Sick Leave</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="col">Total Allowance (Days)</td>
          <td>{{ userInfoArr.originAnnualLeave }}</td>
          <td>{{ userInfoArr.originCasualLeave }}</td>
          <td>{{ userInfoArr.originSickLeave }}</td>
        </tr>
        <tr>
          <td scope="col">Allowance Remaining (Days)</td>
          <td>{{ userInfoArr.annualLeave }}</td>
          <td>{{ userInfoArr.casualLeave }}</td>
          <td>{{ userInfoArr.sickLeave }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <LeaveRequest />
</template>
<script>
import LeaveRequest from "@/components/LeaveRequest.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    LeaveRequest,
  },
  setup() {
    onMounted(() => {
      store.dispatch("getUserInfo");
    });
    const store = useStore();
    return {
      userInfoArr: computed(() => store.getters.getUserInfo),
    };
  },
};
</script>

<style></style>
