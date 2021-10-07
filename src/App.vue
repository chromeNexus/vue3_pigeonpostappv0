<!--
<template>
  <div id="app" class="p-0">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style></style>
-->
<template>
  <div id="app" class="p-0">
    <!--   <NavBar if="loggedIn" />
    <NavBarMain if="!loggedIn" />
    -->
    <router-view />
  </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
// import NavBarMain from "../components/NavBarMain.vue";
import { authComputed } from './store/helper' // import { authComputed } from '../vuex/helper.js'
import { auth } from './server/firebase'
console.log(auth) // use to test auth look at devtoools console.
export default {
  name: 'app',
  components: {
    //  NavBar, NavBarMain,
  },
  computed: {
    ...authComputed
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      // console.log('logged out')
    }
  }
}
</script>
