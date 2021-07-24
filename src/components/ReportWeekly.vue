<template>
  <h3>Attendance Report</h3>
  <hr />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="d-flex align-items-center">
            <DatePickRange v-model="range" />
            <button
              class="btn btn-outline-success"
              @click="getSumWorkingTime()"
            >
              Search
            </button>
          </li>
        </ul>
        <!-- Left links -->
        <div class="d-flex align-items-center">
          <router-link class="nav-link" to="/record/report">
            <button type="button" class="btn btn-success">
              Daily
            </button></router-link
          >
          <button type="button" class="btn btn-success">Weekly</button>
          <router-link class="nav-link" to="/report/reportmonthly"
            ><button type="button" class="btn btn-success">
              Monthly
            </button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="table-responsive">
    <h5>Status：Work</h5>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Total Working Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tempMap" :key="item">
          <td>
            {{
              new Date(
                new Date(new Date().getFullYear(), 0, 1).getTime() +
                  (item[0] - 1) * 7 * 86400000 -
                  (new Date(new Date().getFullYear(), 0, 1).getDay() - 7) *
                    (24 * 60 * 60 * 1000)
              )
                .toLocaleDateString()
                .replaceAll("/", "-")
            }}
          </td>
          <td>
            {{
              `${Math.floor(item[1] / 3600)}hr ${Math.floor(
                (item[1] - Math.floor(item[1] / 3600) * 3600) / 60
              )} min ${parseInt(
                item[1] -
                  Math.floor(item[1] / 3600) * 3600 -
                  Math.floor(
                    (item[1] - Math.floor(item[1] / 3600) * 3600) / 60
                  ) *
                    60
              )}s`
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { onMounted, ref, reactive, computed } from "vue";
import { attendanceList } from "@/api/index.js";
import DatePickRange from "@/components/DatePickRange.vue";

export default {
  components: { DatePickRange },

  setup() {
    onMounted(() => {
      getSumWorkingTime();
    });
    const range = ref(new Date());
    const workingTimeSort = reactive({
      size: 1000,
      type: "work",
    });
    const durationArr = ref([]);
    const weeklyArr = ref([]);
    const tempMap = reactive(new Map());
    const getSumWorkingTime = async () => {
      const res = await attendanceList(workingTimeSort);
      durationArr.value = res.data.body.content;
      weeklyArr.value = res.data.body.content.map((a) => {
        let date1 = new Date(a.key.date);
        let date2 = new Date(date1.getFullYear(), 0, 1);
        let day1 = date1.getDay();
        if (day1 == 0) day1 = 7;
        let day2 = date2.getDay();
        if (day2 == 0) day2 = 7;
        let d = Math.round(
          (date1.getTime() -
            date2.getTime() +
            (day2 - day1) * (24 * 60 * 60 * 1000)) /
            86400000
        );
        let weekOfYear = Math.ceil(d / 7) + 1;
        let temp = {
          week: weekOfYear,
          weekNumber: new Date(a.key.date).getDay(),
          date: a.key.date,
          duration: a.duration,
        };
        return temp;
      });
      console.log(weeklyArr.value);
      workingTimeSort.timestamp1 = computed(() =>
        Date.parse(range.value.start)
      );
      workingTimeSort.timestamp2 = computed(() => Date.parse(range.value.end));
      tempMap.clear();
      for (const tempElment of weeklyArr.value) {
        let key = tempElment.week;
        let duration = (tempElment.duration || "")
          .replace("PT", "")
          .replace("H", ":")
          .replace("M", ":")
          .replace("S", "")
          .split(":");
        // console.log(key, duration);
        if (duration.length == 3) {
          duration =
            (new Number(duration[0]) * 60 + new Number(duration[1])) * 60 +
            new Number(duration[2]);
        } else if (duration.length == 2) {
          duration = new Number(duration[0]) * 60 + new Number(duration[1]);
        } else {
          duration = new Number(duration[0]);
        }
        let preValue = tempMap.get(key);
        if (preValue == null) {
          tempMap.set(key, duration);
        } else {
          tempMap.set(key, preValue + duration);
        }
      }
      console.log(durationArr.value);
      console.log(tempMap);
      console.log(
        new Date(
          new Date(new Date().getFullYear(), 0, 1).getTime() +
            (23 - 1) * 7 * 86400000 -
            (new Date(new Date().getFullYear(), 0, 1).getDay() - 7) *
              (24 * 60 * 60 * 1000)
        ).toLocaleDateString()
      );
    };

    return {
      durationArr,
      tempMap,
      getSumWorkingTime,
      range,
    };
  },
};
</script>

<style scoped></style>
