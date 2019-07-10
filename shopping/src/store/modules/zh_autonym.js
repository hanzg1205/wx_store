import { Authidentity } from "@/servers";
const state = {
  //   lists: []
};
const actions = {
  async identify({ commit }, payload) {
    console.log("payload...", payload);
    let result = await Authidentity(payload);
    return result;
  }
};

export default {
  namespaced: true,
  state,
  actions
};
