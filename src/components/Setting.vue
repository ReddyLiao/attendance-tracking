<template>
  <h3>Setting</h3>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Toggle button -->
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
          <router-link class="nav-link" to="/setting/companySetup"
            ><button type="button" class="btn btn-outline-warning">
              Company Setup
            </button></router-link
          >
          <router-link class="nav-link" to="/setting/changPassword"
            ><button type="button" class="btn btn-outline-warning">
              Change Password
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
export default {};
</script>

<style></style>
