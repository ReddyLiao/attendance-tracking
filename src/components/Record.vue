<template>
  <h1>Record</h1>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>

      <div class="collapse navbar-collapse">
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
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
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

<style></style>
