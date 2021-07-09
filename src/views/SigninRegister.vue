<template>
  <div class="container">
    <div class="col-md-6 mx-auto text-center">
      <div class="header-title">
        <h1 class="wv-heading--title">Attendance Tracking</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="myform form">
          <form name="login">
            <div class="form-group">
              <input
                type="text"
                id="userName"
                class="form-control my-input"
                placeholder="Username"
                v-model="user.username"
              />
            </div>
            <div class="space"></div>
            <div class="form-group">
              <input
                type="password"
                id="UserPassword"
                class="form-control my-input"
                placeholder="Password"
                v-model="user.password"
                @keyup.enter="userSignIn"
              />
            </div>
            <div class="space"></div>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-block signin-button tx-tfm"
                @click="userSignIn"
              >
                Sign In
              </button>
            </div>
            <div class="col-md-12">
              <div class="login-or">
                <hr class="hr-or" />
                <span class="span-or">or</span>
              </div>
            </div>
            <div class="form-group">
              <button
                type="button"
                class="btn btn-block register-button tx-tfm"
                @click="userRegister"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { onMounted, reactive } from "vue";
import { signIn, register } from "@/api/index.js";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const user = reactive({
      username: "",
      siteId: 1,
      password: "",
    });
    const userSignIn = async () => {
      const res = await signIn(user);
      const status = res.data.status;
      console.log(res);
      if (status === "ok") {
        localStorage.setItem("transAdmin", res.data.body);
        //語法storage.setItem(keyName, keyValue);
        router.push("/");
      } else {
        alert(res.data.msg);
      }
    };
    !route.query.token
      ? onMounted(() => localStorage.removeItem("transAdmin"))
      : "";
    const userRegister = async () => {
      const res = await register(user);
      const status = res.data.status;
      console.log(res.data.msg);
      console.log(res);
      if (status === "ok") {
        alert("註冊成功");
        userSignIn();
      } else {
        alert(res.data.msg);
      }
    };
    return {
      user,
      userSignIn,
      userRegister,
    };
  },
};
</script>

<style>
.signin-button {
  background: #54c7c3;
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 8px 25px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.register-button {
  color: #fff !important;
  border: 1px solid #f0d807;
  background: #f0d807 !important;
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 8px 25px;
}
.my-input {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: text;
  padding: 8px 10px;
  transition: border 0.1s linear;
}
.header-title {
  margin: 3rem 0;
}
h1 {
  font-size: 35px;
  line-height: 40px;
  font-weight: 600;
  color: #4c5357;
}

.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.space {
  height: 15px;
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
}
</style>
