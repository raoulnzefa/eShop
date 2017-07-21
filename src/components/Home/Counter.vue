<template>
  <div>
    <div class="panel">Count: {{count}}</div>
    <p>
      <span>{{time[0]}}</span>
      <span>{{time[1]}}</span>
      <span>{{time[2]}}</span>
    </p>
    <div class="button-box">
      <label>实时:</label>
      <button v-on:click="doAction(increase, false)">增加</button>
      <button v-on:click="doAction('decrease', false)">下降</button>
      <button v-on:click="doAction(reset, false)">重置</button>
    </div>
    <div class="button-box">
      <label>延时:</label>
      <button v-on:click="doAction(increase, true)">增加</button>
      <button v-on:click="doAction('decrease', true)">下降</button>
      <button v-on:click="doAction(reset, true)">重置</button>
    </div>
    <div>
      <button v-on:click="log">test</button>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'counter',
    props: {
      countSize: {
        default: 1
      }
    },
    computed: {
      ...mapState({
        count: state => state.counter.count,
        time: state => state.counter.time
      })
    },
    methods: {
      doAction (fn, delay) {
        if (typeof fn === 'string') {
          if (fn === 'decrease' && this.count <= 0) {
            return false
          }

          fn = this[fn]
        }

        fn && fn({delay, countSize: this.countSize})
      },
      ...mapActions([
        'increase',
        'decrease',
        'reset'
      ]),
      log () {
        console.log(this)
      }
    }
  }
</script>
<style>

</style>
