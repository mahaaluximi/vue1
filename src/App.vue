<template>
  <base-container title="Vuex" v-if="isLogged">
    <the-counter></the-counter>
    <!-- Accessing the mapActions methods -->
    <button @click="increment">Add 1</button>
    <!-- Calling the method written in actions using mapActions , within bracket the payload can be passed-->
    <button @click="increase({ value: 10 })">Add 10</button> 
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import userAuth from './components/userAuth.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    userAuth
  },
  computed: {
        ...mapGetters(['isLogged'])
    },
  methods: {
    // addOne() {
      // Commenting as we shouldn't update state directly from component
      //this.$store.state.counter++;
      //this.$store.commit('increment'); //commit is built-in method and takes the method name as argument
      //invoking actions
      //this.$store.dispatch('increment');
      //The above is commented as we have to useActions instead of commit
    // },
    ...mapActions('numbers',['increment', 'increase']),
    //suppose we didn't the method names exactly as the actions name then we pass argument as an object , in which we can specify the method name
    //our name
    ...mapActions('numbers',{
      addOne: 'increment', //to our name map the actions it has to associate
      addTen: 'increase'
    }),
    // addTen() {
      //Type 1
      //this.$store.commit('increase', { value: 10 }); //Passing the payload as an object, 
      // "increase" - mutation method name, {value: 10} - payload

      //Type 2 - the param can be passed as object, 
      // in which "type" property is must and we need to pass the mutation method name in that
      //rest other properties passed in that object will be passed as payload
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });

      // this.$store.commit({
      //   type: 'numbers/increase',
      //   value: 10
      // });

      //Invoking actions
      // this.$store.dispatch('increase', { value: 10 });
      // this.$store.dispatch('numbers/increase', { value: 10 });
    //}
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>