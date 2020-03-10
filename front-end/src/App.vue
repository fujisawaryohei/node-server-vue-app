<template>
  <v-app>
    <!-- header -->
    <v-toolbar app>
      <v-toolbar-side-icon v-show="$store.state.login_user" @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- header -->
    <!-- sideNav -->
    <SideNav/>
    <!-- SideNav-->
    <!-- content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- content -->
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',
  components: {
    SideNav
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
          this.setLoginUser(user);
          if(this.$router.currentRoute.name === "home") this.$router.push({ name : 'addresses'})
        } else {
          this.deleteUserInfo();
          this.$router.push({ name : 'home' })
        }
    })
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteUserInfo'])
  }
}
</script>
