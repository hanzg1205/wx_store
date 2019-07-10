import { addNewAddress } from "@/servers";
const state = {};
const actions = {
  submit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      let data = await addNewAddress(payload);
      resolve(data);
    });
  }
};

export default {
  namespaced: true,
  state,
  actions
};
