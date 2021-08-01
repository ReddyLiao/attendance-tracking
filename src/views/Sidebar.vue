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
            <a
              class="btn btn-toggle align-items-center text-white collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#submenu"
              aria-expanded="false"
            >
              Settings
            </a>
            <div class="collapse" id="submenu">
              <ul class="btn-toggle-nav list-unstyled fw-normal">
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
            </div>
          </li>
        </div>
      </ul>
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
