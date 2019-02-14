<template>
  <div class="onePost">
    <button v-on:click="getContent()"/>
    <h1> {{ title }} </h1>
    <div> {{ body }} </div>
  </div>
</template>

<script>
import firebaseApp from '@/firebase/index.js'
import flamelink from 'flamelink'

export default {
  data () {
    return {
      title: '【あれれ】タイトル',
      body: '【あれれ】ボデー'
    }
  },
  methods: {
    getContent: function () {
      const app = flamelink({ firebaseApp })
      let that = this
      app.content.get('posts')
        .then(posts => {
          Object.keys(posts).forEach(function (data) {
            that.body += posts[data].content
          })
        })
    }
  }
}
</script>

<style scoped>
button {
  height: 19px;
  width: 19px;
}
</style>
