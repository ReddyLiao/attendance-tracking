<template>
  <h1>Record</h1>
  <nav class="navbar navbar-light bg-light">
    <form class="container-fluid justify-content-end">
      <router-link class="nav-link" to="/record/dailyRecord"
        ><button type="button" class="btn btn-outline-warning">
          DailyRecord
        </button></router-link
      >
      <router-link class="nav-link" to="/record/report"
        ><button type="button" class="btn btn-outline-warning">
          Report
        </button></router-link
      >
    </form>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.navbar {
  @media (min-width: 576px) {
    width: 210px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    width: 260px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 320px;
  }
}
</style>
