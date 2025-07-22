export default {
        //trying to get the root state
        testLogin(state, getters, rootState, rootGetters) {
            console.log(rootState.isLogged);
            console.log(rootGetters.isLogged);
            return state.isLogged;
        },
        finalCounter(state) {
            return state.counter * 3;
        },
        //as discussed one getter depends on another sometimes
        //otherwise same code has to be repeated in more than one getter
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter; //accessing the getter
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    }