import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

//store module
export default {
    namespaced: true,  //completely locallizing the module. so we can access everything with the identifier
    //given to associate this module to root module. Here it is "numbers"
    state() {
        return {
            counter: 0,
        };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters:counterGetters
}
