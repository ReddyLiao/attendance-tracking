<template>
  <v-calendar
    :attributes="attributes"
    :value="null"
    color="yellow"
    is-dark
    is-expanded
  >
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
    const sort = {
      size: 30,
      sort: "key.date,desc",
    };
    const getAttendanceList = async () => {
      const res = await attendanceList(sort);
      attendanceArr.value = res.data.body.content;
      console.log(res.data.body.content);
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
              // isInteractive: true, 編輯或運算
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
