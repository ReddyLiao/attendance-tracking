<template>
  <h1>Clock</h1>
  <Clock />
  <button
    type="button"
    class="btn btn-outline-info"
    @click.prevent="getPunchTime"
  >
    Punch in
  </button>
  <div class="tablesize">
    <div class="table-responsive">
      <table class="table mt-3 table-hover">
        <thead>
          <h3>打卡時間</h3>
          <hr />
          <tr>
            <th>上班時間</th>
            <th>下班時間</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ punchTimeArr.startTime }}</td>
            <td>{{ punchTimeArr.endTime }}</td>
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
    onMounted(() => {});
    const punchTimeArr = ref([]);
    const getPunchTime = async () => {
      const res = await punchTime();
      punchTimeArr.value = res.data.body;
      console.log(res);
    };

    return {
      punchTimeArr,
      getPunchTime,
    };
  },
};
</script>
<style scoped></style>
