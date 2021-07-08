<template>
  <div>
    <header>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" href="#" to="punch"
            >Punch</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="requests"
            >Requests</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="record"
            >Record</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="setting"
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
  <!-- <aside></aside> -->
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
  name: "Home",
};
</script>
<style>
aside {
  float: left;
  width: 200px;
  height: 630px;
  text-align: center;
  background-color: #63808f;
  padding: 20px 10px;
}
</style>
