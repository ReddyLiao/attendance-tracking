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
      <span class="fs-5 d-none d-sm-inline">User</span>

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
          <span class="ms-1 d-none d-sm-inline">Item</span>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Item</span>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Item</span>
        </li>
        <li>
          <span class="ms-1 d-none d-sm-inline">Item</span>
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
                <span class="d-none d-sm-inline">Company Setup</span> 1</a
              >
            </li>
            <li>
              <a href="#" class="nav-link px-0">
                <span class="d-none d-sm-inline">Change Password</span> 2</a
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
export default {
  name: "sidebar",
};
</script>
<style></style>
