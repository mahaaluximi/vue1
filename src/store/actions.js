export default {
        //context is automatically passed by vuex. here asynchronous code is allowed
        //any name can be give to action, since it is going to commit increment mutation so kept the same
        //so we can easily indentify it is for which mutation
        login(context) {
            context.commit('login');``
        },
        logout(context) {
            context.commit('logout');
        }     
    }