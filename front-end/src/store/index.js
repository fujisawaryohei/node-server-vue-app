import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    addresses: [],
    login_user: null
  },
  mutations: {
    toggleSideMenu(state){
      state.drawer = !state.drawer
    },
    createInfo(state, address){
      state.addresses.push(address);
    },
    setLoginUser(state, userInfo){
      state.login_user = userInfo
    },
    deleteUserInfo(state){
      state.login_user = null;
    }
  },
  actions: {
    toggleSideMenu(context){
        context.commit('toggleSideMenu');
    },
    createInfo(context, address){
      context.commit('createInfo', address);
    },
    login(){
      const authProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(authProvider);
    },
    setLoginUser(context, userInfo){
      context.commit('setLoginUser', userInfo);
    },
    logout(){
      firebase.auth().signOut();
    },
    deleteUserInfo(context){
      context.commit('deleteUserInfo');
    }
  },
  getters: {
    userName: (state) => { 
      return state.login_user.displayName ? state.login_user.displayName : '';
    },
    photoURL: (state) => { 
      return state.login_user.photoURL ? state.login_user.photoURL : '' ;
    }
  },
  modules: {
  }
})
