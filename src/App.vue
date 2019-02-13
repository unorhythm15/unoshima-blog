<template>
  <div id="app">
    <com-header/>
    <com-slider/>
    <router-view/>
    <com-footer/>
  </div>
</template>

<script>
import ComHeader from '@/components/particial/ComHeader.vue'
import ComFooter from '@/components/particial/ComFooter.vue'
import ComSlider from '@/components/particial/ComSlider.vue'

export default {
  name: 'App',
  components: {
    ComHeader, ComFooter, ComSlider
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
