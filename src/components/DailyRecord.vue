<template>
  <v-calendar :attributes="attributes" :value="null" color="yellow" is-dark />
</template>

<script>
export default {
  data() {
    const punchs = [
      {
        description: "Daily punch time",
        isComplete: false,
        dates: { weekdays: 6 }, // 有打卡資料
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
