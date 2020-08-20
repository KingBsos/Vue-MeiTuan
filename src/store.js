import Vue from 'vue';
import Vuex from 'vuex';
import ajax from './utils/ajax.js';
import axios from 'axios';

window.axios = axios;

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
            state: () => ({
                topNav: [],
                allNav: [],
                rightTopNav: [],
                headImg: '',
                carouselPics: [],
                advertPics: [],
                catEyeMovieNav: [],
                catEyeMovieData: [],
                famousHostelNav: [],
                guessYouLikeNav: [],
                guessYouLikeData: [],
                famoushostelData: [],
                hotCity: [],
                recentVisit: [],
                allCityByLetter: [],
                cityByDistrict: []
            }),
            mutations: {
                loadDisData(state, payload) {
                    Object.assign(state, payload);
                }
            },
            actions: {
                loadDisData({ commit }) {
                    commit('changeLoadState', true, {root: true});
                    return ajax('alldata').then(xhr => {
                        commit('loadDisData', JSON.parse(xhr.response));
                        commit('changeLoadState', false, {root: true});
                    });
                }
            }
        },
        loginInfo: {
            namespaced: true,
            state: () => ({}),
            mutations: {
                loadInfo(state, payload) {
                    Object.assign(state, payload);
                }
            },
            actions: {
                login({ commit }) {
                    //console.log(info);
                    return axios.get('login').then(({data}) => {
                        //console.log(data)
                        commit('loadInfo', data)
                        return true;
                    }).catch(error => {console.log(error);return false;});
                }
            }
        }
    }
});

export default store;