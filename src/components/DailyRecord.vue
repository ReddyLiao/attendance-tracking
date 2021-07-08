<template>
  <v-calendar
    :attributes="attributes"
    :value="null"
    color="yellow"
    is-dark
    is-expanded
  >
    <div>
      <!-- <div class="text-xs text-gray-300 font-semibold text-center">
        {{ dayTitle }}
      </div>
      <ul>
        <li v-for="{ key, customData } in attributes" :key="key">
          {{ customData.description }}
        </li>
      </ul> -->
    </div>
  </v-calendar>
</template>
<script>
import { onMounted, ref } from "vue";
import { attendanceList } from "@/api/index.js";

export default {
  setup() {
    onMounted(() => {
      getAttendanceList();
    });
    const attendanceArr = ref([]);
    const getAttendanceList = async () => {
      const res = await attendanceList();
      attendanceArr.value = res.data.body.content;
      localStorage.setItem(
        "attendanceRecord",
        JSON.stringify(res.data.body.content)
      );
    };

    /**
 var arr = [];
var len = oFullResponse.results.length;
for (var i = 0; i < len; i++) {
    arr.push({
        key: oFullResponse.results[i].label,
        sortable: true,
        resizeable: true
    });
}
 */
    return {
      attendanceArr,
      getAttendanceList,
    };
  },
  data() {
    const punchs = [];
    var dailyPuncharr = [
      "2021-07-06",
      "2021-07-07",
      "2021-07-08",
      "2021-07-09",
    ];
    for (var i = 0; i < dailyPuncharr.length; i++) {
      punchs.push({
        description: "Daily punch time2",
        isComplete: false,
        dates: dailyPuncharr[i],
        color: "indigo",
      });
    }
    console.log(punchs);

    return {
      incId: punchs.length,
      punchs,
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for punchs
        ...this.punchs.map((punch) => ({
          dates: punch.dates,
          highlight: {
            color: punch.color,
            fillMode: "light",
            // class: punch.isComplete ? "opacity-75" : "",
          },

          popover: {
            label: punch.description,
            visibility: "click",
            hideIndicator: true,
          },
          customData: punch,
        })),
      ];
    },
  },
};
</script>

<style></style>
