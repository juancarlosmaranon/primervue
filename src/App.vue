<template>
  <MenuComponent/>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>Elemento estatico</h1> -->
  <hr/>
    <!-- ESTO ES UN ELEMENTO DINAMICO -->
  <router-view></router-view>
  <hr/>
  <!-- <HolaMundo/>
  <CineComponent/>
  <HomeComponent/>
  <MusicaComponent/> -->
  
</template>

<script>
// import HolaMundo from './components/HolaMundo.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import CineComponent from './components/CineComponent.vue'
// import MusicaComponent from './components/MusicaComponent.vue'
import MenuComponent from './components/MenuComponent.vue'


export default {
  name: 'App',
  components: {
    MenuComponent
    // HolaMundo,HomeComponent,CineComponent,MusicaComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
