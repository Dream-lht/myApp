import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "src/store/types";
const state = {
  userName: "",
  passWord: "",
};

const login: Module<ILoginState, IRootState> = {
  state,
};
export default login;
