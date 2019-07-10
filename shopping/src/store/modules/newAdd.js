import { addNewAddress } from "@/servers";
const state = {
  lists: []
};
const actions = {
  submit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await addNewAddress(payload);
      commit("addRess", { lists: data.data.result });

      resolve(data);
    });
  }
};
const mutations = {
  addRess(state, payload) {
    console.log(state);
    for (let key in payload) {
      return (state[key] = payload[key]);
    }
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
