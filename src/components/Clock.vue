<template>
  <div class="date-clock">
    <div class="date">
      {{ dateTime.years }}/{{ dateTime.months + 1 }}/{{ dateTime.dates }}
      {{ week[dateTime.weeks] }}
    </div>
    <div class="clock">
      {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
    </div>
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
  left: 10px;
  color: #121213;
  letter-spacing: 0.05em;
  // font-size: 45px;
}
.clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  left: 10px;
  color: #121213;
  letter-spacing: 0.05em;
  // font-size: 70px;
}
.date-clock {
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .clock {
      font-size: 50px;
    }
    .date {
      font-size: 30px;
    }
    width: 260px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .clock {
      font-size: 60px;
    }
    .date {
      font-size: 35px;
    }
    width: 260px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .clock {
      font-size: 65px;
    }
    .date {
      font-size: 40px;
    }
    width: 320px;
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 380px;
    .clock {
      font-size: 70px;
    }
    .date {
      font-size: 45px;
    }
  }
}
</style>
