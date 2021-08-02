<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button type="button" id="sidebarCollapse" class="btn btn-info">
        <i class="fas fa-align-left"></i>
        <span>Toggle Sidebar</span>
      </button>
      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-align-justify"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <header>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" href="#" to="/punch"
            >Punch</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/requests"
            >Requests</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/record"
            >Record</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/setting"
            >Setting</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/signinRegister"
            >Sign Out</router-link
          >
        </li>
      </ul>
    </header>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <sidebar />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
  name: "Home",
};
</script>
<style>
.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}
</style>
