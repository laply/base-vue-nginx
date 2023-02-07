import * as api from "../api";

const actions = {
  ADD_BOARD(_, { title }) {
    return api.board.create(title);
  },
  FETCH_BOARDS({ commit }) {
    return api.board.fetch().then((res) => {
      commit("SET_BOARDS", res.list);
    });
  },
  LOGIN({ commit }, { email, password }) {
    return api.auth.login(email, password).then((res) => commit("LOGIN", res.accessToken));
  },
};

export default actions;
