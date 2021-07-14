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
    const dailyPunchs = ref([]);
    const getAttendanceList = async () => {
      const res = await attendanceList();
      attendanceArr.value = res.data.body.content;
      console.log(res);
      dailyPunchs.value = res.data.body.content.map((a) => {
        let temp = {
          description: `Punch In ${a.startTime}\n
            Punch Out ${a.endTime}\n
            Working Time ${
              (a.duration || "").replace("PT", "").split(".")[0] + "S"
            }`,
          // isComplete: false,
          status: a.type,
          dates: a.key.date,
          color: "indigo",
        };
        return temp;
      });
    };

    return {
      attendanceArr,
      getAttendanceList,
      incId: dailyPunchs.length,
      dailyPunchs,
    };
  },

  computed: {
    attributes() {
      return [
        ...this.dailyPunchs.map((punch) => {
          console.log(punch);

          return {
            dates: punch.dates,
            highlight: {
              fillMode: "light",
              // class: punch.isComplete ? "opacity-75" : "",
              color: punch.status === "work" ? "indigo" : "red",
            },
            popover: {
              label: punch.description,
              visibility: "click",
              hideIndicator: true,
            },
            customData: punch,
          };
        }),
      ];
    },
  },
};
</script>

<style></style>
