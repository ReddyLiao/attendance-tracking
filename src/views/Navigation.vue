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
          <router-link class="nav-link" href="#" to="dayOff"
            >Day Off</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="setting"
            >Setting</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/signIn"
            >Sign Out</router-link
          >
        </li>
      </ul>
    </header>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped></style>
