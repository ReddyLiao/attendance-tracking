<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style="width: 280px">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        px-3
        pt-2
        text-white
        min-vh-100
        text-start
      "
    >
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="false"
          >
            Home
          </button>
          <div class="collapse" id="home-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <router-link
                  href="#"
                  to="/setting/companySetup"
                  class="nav-link px-0"
                >
                  <span class="d-none d-sm-inline"
                    >Company Setup</span
                  ></router-link
                >
              </li>
              <li><a href="#" class="link-dark rounded">Updates</a></li>
              <li><a href="#" class="link-dark rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            Dashboard
          </button>
          <div class="collapse" id="dashboard-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Overview</a></li>
              <li><a href="#" class="link-dark rounded">Weekly</a></li>
              <li><a href="#" class="link-dark rounded">Monthly</a></li>
              <li><a href="#" class="link-dark rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
            aria-expanded="false"
          >
            Orders
          </button>
          <div class="collapse" id="orders-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="false"
          >
            Account
          </button>
          <div class="collapse" id="account-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New...</a></li>
              <li><a href="#" class="link-dark rounded">Profile</a></li>
              <li><a href="#" class="link-dark rounded">Settings</a></li>
              <li><a href="#" class="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        px-3
        pt-2
        text-white
        min-vh-100
        text-start
      "
    >
      <div class="p-3"></div>
      <h3>Hi ! {{ userInfoArr.username }}</h3>
      <ul class="list-unstyled ps-0">
        <div class="ms-1 d-none d-sm-inline">
          <div class="p-3">
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
          </div>
        </div>
        <div class="p-3">
          <li class="mb-1">
            <span
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </span>
            <a
              href="#submenu"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <span class="ms-1 d-none d-sm-inline">Settings</span>
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <router-link
                  href="#"
                  to="/setting/companySetup"
                  class="nav-link px-0"
                >
                  <span class="d-none d-sm-inline"
                    >Company Setup</span
                  ></router-link
                >
              </li>
              <li>
                <router-link
                  href="#"
                  to="/setting/changPassword"
                  class="nav-link px-0"
                >
                  <span class="d-none d-sm-inline"
                    >Change Password</span
                  ></router-link
                >
              </li>
            </ul>
          </li>
        </div>
      </ul>
      <hr />
    </div>
  </div>
  <div class="col py-3">
    <router-view />
  </div>
</template>
<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "sidebar",
  setup() {
    onMounted(() => {
      store.dispatch("getUserInfo");
    });
    const store = useStore();
    return {
      userInfoArr: computed(() => store.getters.getUserInfo),
    };
  },
};
</script>
<style></style>
