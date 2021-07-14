<template>
  <v-date-picker :max-date="new Date()" is-range>
    <template v-slot="{ inputValue, inputEvents }">
      <div class="flex justify-center items-center">
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="
            border
            px-2
            py-1
            w-32
            rounded
            focus:outline-none focus:border-indigo-300
          "
        />
        <span> ➜ </span>
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
          class="
            border
            px-2
            py-1
            w-32
            rounded
            focus:outline-none focus:border-indigo-300
          "
        />
      </div>
    </template>
  </v-date-picker>
</template>
<script>
export default {
  // data() {
  //   return {
  //     range: {
  //       start: new Date(),
  //       end: new Date(),
  //     },
  //   };
  // },
};
</script>
