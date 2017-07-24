<template>
  <div>
    <div class="panel">Count: {{count}}</div>
    <p>
      <span>{{time[0]}}</span>
      <span>{{time[1]}}</span>
      <span>{{time[2]}}</span>
    </p>
    <div class="button-box" v-if="!isDelay">
      <label>实时:</label>
      <button v-on:click="doAction(increase, false)">增加</button>
      <button v-on:click="doAction('decrease', false)">下降</button>
      <button v-on:click="doAction(reset, false)">重置</button>
    </div>
    <div class="button-box" v-else>
      <label>延时:</label>
      <button v-on:click="doAction(increase, true)">增加</button>
      <button v-on:click="doAction('decrease', true)">下降</button>
      <button v-on:click="doAction(reset, true)">重置</button>
    </div>
    <div>
      <button v-on:click="switchDelay(!isDelay)">{{delay ? '实时' : '延时'}}</button>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'counter',
    mounted () {
      this.isDelay = this.$store.state.route.query.delay === 'true'
    },
    data () {
      return {
        isDelay: false
      }
    },
    props: {
      countSize: {
        default: 1
      },
      delay: {
        default: false
      },
      delayTime: {
        default: 1
      }
    },
    computed: {
      scope () {
        return this.$store.state.counter
      },
      count () {  // !箭头函数绑定this，不能用 【Q05】
        return this.scope.count
      },
      ...mapState({
        // isDelay: state => state.counter.isDelay,
        time: state => state.counter.time
      })
    },
    watch: {
      'scope': {
        handler (curVal, oldVal) {   // curVal === oldVal always true 【Q07】
          if (this.isDelay !== curVal.isDelay) {
            this.isDelay = curVal.isDelay
          }
        },
        deep: true
      }
    },
    methods: {
      doAction (fn, delay) {
        if (typeof fn === 'string') {
          fn = this[fn]
        }

        fn && fn({
          delay,
          countSize: this.countSize,
          delayTime: this.delayTime
        })
      },
      ...mapActions([
        'increase',
        'decrease',
        'reset'
      ]),
      switchDelay () {
        // 在状态更新成功之后再进行View更新 【Q06】，所以必须在Action处理
        this.$store.dispatch('switchDelay', this.isDelay)
      }
    }
  }
</script>
<style lang="scss">
  @import "funtion";

  .panel {
    font-size: rem(18);
    color: #000 + #f00;
  }
</style>
