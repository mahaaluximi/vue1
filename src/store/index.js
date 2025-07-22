import { createStore } from 'vuex';
import counterModule from './counter';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';    


//All the modules are merged with the root module and stored in the store via the attribute "modules"
const store = createStore({
    modules: {
        numbers: counterModule //property name u can give anything u want but associate with the intented module
    },
    state() { //state is a mehtod like data, it should return an object
        return {
            isLogged: false,
        };
    },
    mutations: rootMutations,
    //adding actions
    actions: rootActions,
    getters: rootGetters,
});

export default store;