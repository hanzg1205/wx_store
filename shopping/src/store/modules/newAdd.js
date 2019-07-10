import { addNewAddress } from "@/servers";
const state = {
  lists: []
};
const actions = {
  submit({ commit }, payload) {
    console.log('payload....',payload)
    return new Promise(async (resolve, reject) => {
      let data = await addNewAddress(payload);
      console.log('data....',data)
      commit("addRess", { lists: data.result });

      resolve(data);
    });
  }
};
const mutations = {
  addRess(state, payload) {
    state.lists=payload
    // for (let key in payload) {
    //   return (state[key] = payload[key]);
    // }
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
