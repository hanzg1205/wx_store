import { RECEIVE_LIST } from "./mutations_type";

export default {
  [RECEIVE_LIST](state, { payload }) {
      for (let key in payload) {
        state[key] = payload[key];
    }
  }
};
