import { userAddress } from "@/servers";
const state = {};
const actions = {
    async getAddress(state, commit) {
      let getCode = await userAddress(payload);
    }
};
const mutations = {};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
