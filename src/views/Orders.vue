<template>
  <div class="Orders">
    <NavBar />
    <!--
        <img alt="Vue logo" src="../assets/logo.png" />
        -->
    <CreateShipment />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import CreateShipment from '../components/CreateShipment.vue'
export default {
  name: 'Orders',
  components: {
    NavBar,
    CreateShipment
  }
}
</script>

<style></style>
