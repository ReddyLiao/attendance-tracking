<template>
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
      <span class="fs-5 d-none d-sm-inline"
        >Hi ! {{ userInfoArr.username }}</span
      >
      <ul
        class="
          nav nav-pills
          flex-column
          mb-sm-auto mb-0
          align-items-center align-items-sm-start
        "
      >
        <li class="nav-item">
          <div class="p-3"></div>
        </li>
        <li class="ms-1 d-none d-sm-inline">
          <span>Office Start Time :</span><br />
          <span>{{ userInfoArr.startTime }}</span>
          <div class="p-3"></div>
        </li>
        <li class="ms-1 d-none d-sm-inline">
          <span>Office End Time :</span><br />
          <span>{{ userInfoArr.endTime }}</span>
          <div class="p-3"></div>
        </li>
        <li class="ms-1 d-none d-sm-inline">
          <span>Buffer time :</span><br />
          <span>{{ userInfoArr.bufferTime }} minutes</span>
          <div class="p-3"></div>
        </li>
        <li>
          <a
            href="#submenu3"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <span class="ms-1 d-none d-sm-inline">Settings</span>
          </a>
          <ul
            class="collapse nav flex-column ms-1"
            id="submenu3"
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
