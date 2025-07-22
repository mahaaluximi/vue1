export default{
         increment(state) { //mutation methods get the current state in the parameter
           state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
    }