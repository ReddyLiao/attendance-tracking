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
      "
    >
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
        id="info"
      >
        <li class="nav-item">
          <span class="ms-1 d-none d-sm-inline"></span>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Office Start Time</span><br />
          <span class="ms-1 d-none d-sm-inline">{{
            userInfoArr.startTime
          }}</span>
          <div class="p-3"></div>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Office End Time</span><br />
          <span class="ms-1 d-none d-sm-inline">{{ userInfoArr.endTime }}</span>
          <div class="p-3"></div>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Buffer time</span><br />
          <span class="ms-1 d-none d-sm-inline"
            >{{ userInfoArr.bufferTime }} minutes</span
          >
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
              <a href="#" to="setting" class="nav-link px-0">
                <span class="d-none d-sm-inline">Company Setup</span></a
              >
            </li>
            <li>
              <a href="#" class="nav-link px-0">
                <span class="d-none d-sm-inline">Change Password</span></a
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
import { userInfo } from "@/api/index.js";
import { onMounted, ref } from "vue";

export default {
  name: "sidebar",
  setup() {
    onMounted(() => {
      getUserInfo();
    });
    const userInfoArr = ref([]);
    const getUserInfo = async () => {
      const ref = await userInfo();
      userInfoArr.value = ref.data.body;
    };
    return {
      userInfoArr,
      getUserInfo,
    };
  },
};
</script>
<style></style>
