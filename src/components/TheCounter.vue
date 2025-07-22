<template>
    <h1>{{ finalCounter }}</h1>
    <label>Nomalized Counter</label>
    <h1>{{ normalizedCounter }}</h1>
    <h1>direct access{{ $store.getters['numbers/finalCounter'] }}</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
    // counter() {
      //return this.$store.state.counter;
      //accessing the state using getters. No need to invoke with ()
      //Here we do nothing except accessing the state
      //return this.$store.getters.finalCounter;
      //console.log('getters:', mapGetters(['finalCounter']));
       //-> mapGetters utility takes argument as an array which contains the 
      //name of the getters - we need pass another argument as a first when we give namespace to module
      ...mapGetters('numbers',['finalCounter', 'normalizedCounter'])
    },
    // normalizedCounter() {
    // //this getter returns 100 if more than 100, returns 0 if less than 0
    //   return this.$store.getters.normalizedCounter;
    // },   
}
</script>