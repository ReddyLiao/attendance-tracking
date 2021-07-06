<template>
  <h1>Clock</h1>
  <Clock />
  <button
    type="button"
    class="btn btn-outline-info"
    @click.prevent="sortMethod"
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in punchTimeArr" :key="item">
            <td>
              {{
                new Date(item.key.timestamp).toLocaleDateString() +
                new Date(item.key.timestamp).toLocaleTimeString()
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
// import { onMounted, ref } from "vue";
// import { punchTime } from "@/api/index.js";

export default {
  components: { Clock },
  name: "Punch",
  // setup() {
  //   onMounted(() => {
  //     getPunchTime();
  //   });
  //   const punchTimeArr = ref([]);
  //   const getPunchTime = async () => {
  //     const res = await punchTime();
  //     punchTimeArr.value = res.data;
  //     console.log(res);
  //   };

  //   return { punchTimeArr };
  // },
};
</script>
<style scoped></style>
