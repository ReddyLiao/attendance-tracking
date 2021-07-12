<template>
  <div class="date">
    {{ dateTime.years }}/{{ dateTime.months + 1 }}/{{ dateTime.dates }}
    {{ week[dateTime.weeks] }}
  </div>
  <div class="clock">
    {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
  </div>
</template>

<script>
const date = new Date();
export default {
  name: "App",
  data() {
    return {
      dateTime: {
        years: date.getFullYear(),
        months: date.getMonth(),
        dates: date.getDate(),
        weeks: date.getDay(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();

      this.dateTime = {
        years: date.getFullYear(),
        months: date.getMonth(),
        dates: date.getDate(),
        weeks: date.getDay(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss">
.date {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  left: 30%;
  top: 10%;
  transform: translate(-50%, -50%);
  color: #121213;
  letter-spacing: 0.05em;
  font-size: 50px;
}
.clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  left: 30%;
  top: 10%;
  transform: translate(-50%, -50%);
  color: #121213;
  letter-spacing: 0.05em;
  font-size: 80px;
}
// @media only screen and (min-width: 769px) {
//   h1 {
//     color: #03f;
//     font-size: 70px;
//   }
// }
// @media only screen and (min-width: 321px) and (max-width: 768px) {
//   h1 {
//     color: #f00;
//     font-size: 30px;
//   }
// }
// @media only screen and (min-width: 0px) and (max-width: 320px) {
//   h1 {
//     color: #6f0;
//     font-size: 10px;
//   }
// }
</style>
