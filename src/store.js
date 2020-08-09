import Vue from 'vue';
import Vuex from 'vuex';
import ajax from './utils/ajax.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        loading: false,
        city: {
            name: '北京',
            nearCity: [
                {
                    name: '杭州'
                },
                {
                    name: '杭州'
                }
            ]
        }
    },
    mutations: {
        changeLoadState(state, bool) {
            state.loading = bool;
        },
        changeCity(state, city) {
            state.city = city;
        }
    },
    actions: {},
    modules: {
        allDisplayData: {
            namespaced: true,
            state: () => {},
            mutations: {
                loadDisData(state, payload) {
                    Object.assign(state, payload);
                }
            },
            actions: {
                loadDisData({ commit }) {
                    commit('changeLoadState', true, {root: true});
                    return ajax('ksdjfksdsall').then(xhr => {
                        commit('loadDisData', JSON.parse(xhr.response));
                        commit('changeLoadState', false, {root: true});
                    });
                }
            }
        },
        loginInfo: {
            namespaced: true,
            state: {}
        }
    }
});

export default store;