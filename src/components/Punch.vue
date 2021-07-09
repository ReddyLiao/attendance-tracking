<template>
  <h1>Clock</h1>
  <button
    type="button"
    class="btn btn-outline-info"
    @click.prevent="getPunchTime"
  >
    Punch in
  </button>
  <Clock />
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
                (punchTimeArr.duration || "")
                  .replace("PT", "")
                  .replace("H", ":")
                  .replace("M", ":")
                  .split(".")[0]
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
import { punchTime } from "@/api/index.js";

export default {
  components: { Clock },
  name: "Punch",
  setup() {
    onMounted(() => {
      punchTimeArr.value = JSON.parse(localStorage.getItem("dailyPunch"));
    });
    const punchTimeArr = ref([]);
    const getPunchTime = async () => {
      const res = await punchTime();
      punchTimeArr.value = res.data.body;

      localStorage.setItem("dailyPunch", JSON.stringify(res.data.body));
    };

    return {
      punchTimeArr,
      getPunchTime,
    };
  },
};
</script>
<style scoped></style>
