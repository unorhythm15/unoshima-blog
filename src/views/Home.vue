<template>
  <div class="home">
    <h1>Home</h1>

    <table border="1" width="500" cellspacing="0" cellpadding="5" bordercolor="#333333">
      <tr v-for="n in count" v-bind:key="n">
        <td>
          {{ n }}
        </td>
        <td>
          <span v-if="n % 2 === 0">
            {{ msg }}
          </span>
          <span v-else>
            {{ msg2 }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      count: 20000,
      msg: 'aaaaa',
      msg2: 'bbbbbbbb@bbbbbbbb'
    }
  }
}
</script>
