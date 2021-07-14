import { createStore } from "vuex";
import { userInfo } from "@/api/index.js";

const store = createStore({
  state: {
    userInfoArr: [],
  },
  getters: {
    getUserInfo: (state) => state.userInfoArr,
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfoArr = payload;
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      const res = await userInfo();
      commit("SET_USER_INFO", res.data.body);
    },
  },
});

export default store;
