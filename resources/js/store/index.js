import Vue from "vue";

import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import webservice from "./modules/webservice";

Vue.use(Vuex)
const opts = {
    modules: {
        auth,
        webservice,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [createPersistedState({
            storage: window.localStorage,
        }
    )]
}

export default new Vuex.Store(opts)

