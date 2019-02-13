<template>
  <div id="app">
    <header-item/>
    <slider/>
    <test/>
    <router-view/>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'App',
  components: {
    HeaderItem, Slider
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
