import { addNewAddress } from "@/servers";
const state = {
  lists: []
};
const actions = {
  submit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await addNewAddress(payload);
      commit("addRess", { lists: data.result });
      resolve(data);
    });
  }
};
const mutations = {
  addRess(state, payload) {
    state.lists=payload
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
