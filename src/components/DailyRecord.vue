<template>
  <div class="calendar">
    <v-calendar :value="null" color="red" is-dark>
      <!-- <v-calendar :attributes="attributes"> -->
      <!-- <template #day-popover>
      <div>Using my own content now</div>
    </template> -->
    </v-calendar>
  </div>
</template>

<script>
export default {
  /* data() {
    const punchs = [
      {
        description: 'Daily punch time',
        dates: "", // 有打卡的日期
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
          key: Any,
          highlight: {
            color: "indigo",
            fillMode: "light",
          },
          content: "red",
          popover: {
          label: punchs.description,
          visibility: 'click',
          hideIndicator: true, },
          customData: { ... },
          // We also need some dates to know where to display the attribute
          // We use a single date here, but it could also be an array of dates,
          //  a date range or a complex date pattern.
          dates: new Date(),
]
        },
    }*/
};
</script>

<style></style>
