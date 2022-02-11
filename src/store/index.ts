import { createStore } from "vuex";
import { IRootState } from "./types";
import login from "./module/login/login";
const store = createStore<IRootState>({
  modules: {
    login,
  },
});

export default store;
