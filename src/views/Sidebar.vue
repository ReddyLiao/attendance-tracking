<template>
  <nav id="sidebar" v-show="collapse === false">
    <div class="col py-2"></div>
    <div class="sidebar-header">
      <h2>Attendance Tracking</h2>
    </div>
    <ul class="list-unstyled text-start">
      <li class="sidebar-brand">
        <h4>Hi ! {{ userInfoArr.username }}</h4>
      </li>
      <p>
        <span>Office Start Time :</span><br />
        <span>{{ userInfoArr.startTime }}</span>
      </p>
      <p>
        <span>Office End Time :</span><br />
        <span>{{ userInfoArr.endTime }}</span>
      </p>
      <p>
        <span>Buffer time :</span><br />
        <span>{{ userInfoArr.bufferTime }} minutes</span>
      </p>
      <li class="active">
        <a
          data-bs-target="#submenu"
          data-bs-toggle="collapse"
          aria-expanded="false"
          class="btn btn-toggle dropdown-toggle collapsed"
          >Settings</a
        >
        <div class="collapse" id="submenu">
          <ul class="btn-toggle-nav list-unstyled">
            <li>
              <router-link
                href="#"
                to="/setting/companySetup"
                class="nav-link px-0"
              >
                <span>Company Setup</span></router-link
              >
            </li>
            <li>
              <router-link
                href="#"
                to="/setting/changPassword"
                class="nav-link px-0"
              >
                <span>Change Password</span></router-link
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>

  <div class="col-1 py-4">
    <button class="btn btn-primary" @click="collapse = !collapse">
      <span>&#9776;</span>
    </button>
  </div>
  <div class="col py-3">
    <router-view />
  </div>
</template>
<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "sidebar",
  setup() {
    const collapse = ref(false);
    onMounted(() => {
      store.dispatch("getUserInfo");
    });
    const store = useStore();
    return {
      collapse,
      userInfoArr: computed(() => store.getters.getUserInfo),
    };
  },
};
</script>
<style>
#sidebar {
  min-width: 250px;
  max-width: 250px;
  position: relative;
  height: 100vh;
  background: #2a3446;
  color: #fff;
  transition: all 0.3s;
}
#sidebar.active {
  margin-left: -250px;
}
#sidebar .sidebar-header {
  padding: 20px;
  color: #f0d807;
  background: #333e53;
}
#sidebar ul {
  padding: 20px;
}
#sidebar ul p {
  color: #fff;
  padding: 10px;
}
#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #333e53;
  background: #fff;
}
#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #333e53;
}
a[data-toggle="collapse"] {
  position: relative;
}
ul ul a {
  font-size: 0.9em !important;
  padding: 10px;
  /* padding-left: 30px !important; */
  background: #333e53;
}
/* @media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
} */
</style>
