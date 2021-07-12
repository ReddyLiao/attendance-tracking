<template>
  <v-date-picker mode="dateTime" :minute-increment="30">
    <template v-slot="{ inputValue, inputEvents }">
      <input
        class="
          px-2
          py-1
          border
          rounded
          focus:outline-none focus:border-blue-300
        "
        :value="inputValue"
        v-on="inputEvents"
      />
    </template>
  </v-date-picker>
</template>
<script>
export default {
  // data() {
  //   let date = new Date();
  //   date.setMinutes(0, 0, 0);
  //   return {
  //     date,
  //   };
  // },
};
</script>
