<template>
  <div>
    <div class="date-clock">
      <div class="date">
        {{ dateTime.years }}/{{ dateTime.months + 1 }}/{{ dateTime.dates }}
        {{ week[dateTime.weeks] }}
      </div>
      <div class="clock">
        {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onBeforeMount, onBeforeUnmount } from "vue";
export default {
  setup() {
    const dateTime = reactive({
      years: new Date().getFullYear(),
      months: new Date().getMonth(),
      dates: new Date().getDate(),
      weeks: new Date().getDay(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let timer = ref();
    const setDateTime = () => {
      const date = new Date();
      dateTime.years = date.getFullYear();
      dateTime.months = date.getMonth();
      dateTime.dates = date.getDate();
      dateTime.weeks = date.getDay();
      dateTime.hours = date.getHours();
      dateTime.minutes = date.getMinutes();
      dateTime.seconds = date.getSeconds();
    };
    onBeforeMount(() => {
      timer.value = setInterval(setDateTime, 1000);
    });
    onBeforeUnmount(() => {
      clearInterval(timer.value);
    });
    return { dateTime, week, timer };
  },
};
</script>
<style lang="scss">
.date {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  color: #0d2055;
  letter-spacing: 0.05em;
}
.clock {
  font-family: "Share Tech Mono", monospace;
  text-align: center;
  position: relative;
  color: #0d2055;
  letter-spacing: 0.05em;
}
.date-clock {
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .clock {
      font-size: 45px;
    }
    .date {
      font-size: 30px;
    }
    width: 260px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .clock {
      font-size: 50px;
    }
    .date {
      font-size: 35px;
    }
    width: 260px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .clock {
      font-size: 60px;
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
