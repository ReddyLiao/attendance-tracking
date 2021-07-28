<template>
  <div class="container">
    <div class="col-md-6 mx-auto text-center">
      <div class="header-title">
        <h4>Change Password</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mx-auto text-start">
        <form>
          <div class="form-group">
            <div class="p-3"></div>
            <label class="form-label">New Password</label>
            <input
              type="password"
              id="newPassword"
              class="form-control"
              placeholder="New Password"
              v-model="update.newPassword"
            />
          </div>
          <div class="form-group">
            <div class="p-3"></div>
            <label class="form-label">Re-enter New Password</label>
            <input
              type="password"
              id="newPassword2"
              class="form-control"
              placeholder="Re-enter New Password"
              v-model="update.newPassword2"
              @keyup.enter="userUpdatePassword"
            />
          </div>
          <div class="col-md-6 mx-auto text-end">
            <div class="p-3"></div>
            <button
              type="button"
              class="btn btn-primary"
              @click="userUpdatePassword"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { onMounted, reactive, ref, computed } from "vue";
import { userInfo, updatePassword } from "@/api/index.js";

export default {
  setup() {
    onMounted(() => {
      getUserInfo();
    });
    const userInfoArr = ref([]);
    const getUserInfo = async () => {
      const ref = await userInfo();
      userInfoArr.value = ref.data.body.key;
      console.log(userInfoArr.value.userId);
    };
    const update = reactive({
      newPassword: "",
      newPassword2: "",
      userId: computed(() => userInfoArr.value.userId),
    });

    const userUpdatePassword = async () => {
      const res = await updatePassword(update);
      const status = res.data.status;
      console.log(res.data.msg);
      console.log(res);
      if (status === "ok") {
        alert("Change password success !");
        router.push("/signinRegister");
      } else {
        alert(res.data.msg);
      }
    };
    return {
      update,
      userInfoArr,
      getUserInfo,
      userUpdatePassword,
    };
  },
};
</script>

<style>
@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
}
</style>
