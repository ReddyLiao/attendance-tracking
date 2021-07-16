<template>
  <h1>Clock</h1>
  <Clock />
  <button
    type="button"
    class="btn btn-outline-warning"
    @click.prevent="todayPunch"
  >
    Punch in
  </button>

  <div class="tablesize">
    <div class="table-responsive">
      <table class="table mt-3">
        <thead>
          <tr>
            <th>Punch In</th>
            <th>Punch Out</th>
            <th>Working Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ (punchTimeArr.startTime || "").split(".")[0] }}</td>
            <td>{{ (punchTimeArr.endTime || "").split(".")[0] }}</td>
            <td>
              {{
                (punchTimeArr.duration || "").replace("PT", "").split(".")[0] +
                "S"
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import { onMounted, ref } from "vue";
import { punchTime, todayStatus } from "@/api/index.js";

export default {
  components: { Clock },
  name: "Punch",
  setup() {
    onMounted(() => {
      getPunchTime();
      punchTimeArr.startTime = localStorage.getItem("todayPunch");
    });
    const punchTimeArr = ref([]);
    const todayPunch = async () => {
      const res = await punchTime();
      console.log(ref);
      if (res.data.body.type === "work") {
        punchTimeArr.value = res.data.body;
        localStorage.setItem("todayPunch", res.data.body);
      } else {
        punchTimeArr.value = res.data.body.type;
        console.log(res.data.body.type);
        alert(`Today had ${res.data.body.type} leave`);
      }
    };
    const getPunchTime = async () => {
      const res = await todayStatus();
      if (res.data.body.type === "work") {
        punchTimeArr.value = res.data.body;
      } else {
        punchTimeArr.value = res.data.body.type;
      }
    };

    return {
      todayPunch,
      punchTimeArr,
      getPunchTime,
    };
  },
};
</script>
<style scoped></style>
