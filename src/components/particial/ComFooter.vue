<template>
  <div id="footer">
    {{ makeCopyRightsStr }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstIssuedYear: 2010,
      issuer: 'Ryosuke Uno'
    }
  },
  computed: {
    makeCopyRightsStr: function () {
      const today = new Date()
      const currentYear = today.getFullYear()
      
      if (this.firstIssuedYear === currentYear) {
        return '© ' + this.firstIssuedYear + ' ' + this.issuer
      } else {
        return '© ' + this.firstIssuedYear + '-' + currentYear + ' ' + this.issuer
      }
    }
  }
}
</script>

<style scoped>
#footer {
  background-color: darkkhaki
}
</style>
