import Vue from 'vue';
import Vuex from 'vuex';
import ajax from './utils/ajax.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        loading: false,
        allDisplayData: {}
    },
    mutations: {
        loadDisData(state, payload) {
            state.allDisplayData = payload;
        },
        changeLoadState(state, bool) {
            state.loading = bool;
        }
    },
    actions: {
        loadDisData({commit}) {
            commit('changeLoadState', true);
            return ajax('ksdjfksdsall').then(xhr => {
                commit('loadDisData', JSON.parse(xhr.response));
                commit('changeLoadState', false);
            });
        }
    }
});

export default store;