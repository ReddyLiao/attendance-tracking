<template>
  <div id="navbar">
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="container-fluid">
        <ul class="nav">
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
            <router-link class="nav-link" href="#" to="/signinRegister"
              >Sign Out</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="row flex-nowrap">
    <sidebar />
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: { Sidebar },
};
</script>
<style>
#navbar {
  padding: 10px;
  background: rgb(84, 130, 168);
  border: none;
  border-radius: 0;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

#navbar ul li {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  border-radius: 5px;
}
</style>
