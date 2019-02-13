<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <input v-model="tempCount" type="number"/>
      <button v-on:click="syncCount"></button>
    </div>
    <h1>結果</h1>
    <div>
      <table class="table1">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      count: 0,
      tempCount: 0,
      col1: 'No.',
      col2: 'test content',
      msg: 'aaaaa',
      msg2: 'bbbbbbbb@bbbbbbbb'
    }
  },
  methods: {
    syncCount: function () {
      this.count = Number(this.tempCount);
    }
  }
}
</script>

<style scoped>
td, th {
  border: 1px grey solid;
  width: 500px;
  border-collapse: collapse;
}
button {
  height: 19px;
  width: 19px;
}
</style>
