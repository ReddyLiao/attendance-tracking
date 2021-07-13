<template>
  <h1>Record</h1>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
        </ul>
        <!-- Left links -->
        <div class="d-flex align-items-center">
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
        </div>
      </div>
    </div>
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
