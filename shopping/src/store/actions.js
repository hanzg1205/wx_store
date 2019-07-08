import { RECEIVE_LIST, EDIT_LIST, LOGIN_LIST } from "./mutations_type";
import { login, identifyBase, edit } from "@/api/index";
export default {
  async identify({ commit }, payload) {
    console.log("payload...", payload);
    let result = await identifyBase(payload);
    commit(RECEIVE_LIST, result);
  },
  async edit({ commit, state }, payload) {
    console.log("payload...", payload);
    let result = await edit(payload);
    commit(EDIT_LIST, result);
  },
  async login({ commit, state }, payload) {
    console.log("payload...", payload);
    payload = {
      ...payload,
      code: state.code
    };
    let result = await login(payload);
    commit("updateState", {
      trackId: result.data.result.trackId,
      userInfo: result.data.result.userInfo,
      wxOauthJson: result.data.result.wxOauthJson
    });
    return result.data;
  }
};
