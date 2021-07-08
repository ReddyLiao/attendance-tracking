<template>
  <v-calendar :attributes="attributes" :value="null" color="yellow" is-dark>
    <template #day-popover>
      <div>Using my own content now</div>
    </template>
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

    return {
      attendanceArr,
      getAttendanceList,
    };
  },
  data() {
    const punchs = [
      {
        description: "Daily punch time",
        isComplete: false,
        dates: localStorage.getItem("attendanceRecord"), // 有打卡資料
        color: "indigo",
      },
    ];
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
