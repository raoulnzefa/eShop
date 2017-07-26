<template>
  <li :class="['bar-item', {'item-active': barIndex === index}]" @click="barItemClick(index)">
    <router-link :to="path">
      <span class="bar-icon"><i :class="['icon', 'iconfont', iconCls]" aria-hidden="true"></i></span>
      <span class="bar-text">{{text}}</span>
    </router-link>
  </li>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    props: {
      index: Number,
      barIndex: Number,
      text: String,
      path: String,
      iconCls: String,
      barClick: Function,
      itemActiveCls: {
        type: String,
        default: 'item-active'
      }
    },
    computed: {},
    data () {
      return {}
    },
    methods: {
      barItemClick (index) {
        this.$emit('barClick', index)
      }
    }
  }
</script>
<style lang="scss">
  @import "utils";

  .bar-item {
    width: 33%;
    float: left;
    color: #787878;
    text-align: center;
    cursor: pointer;
    transition:all .3s ease-in-out;

    &:nth-child(2) {
      width: 34%;
    }

    span {
      display: block;
      &.bar-icon {
        font-size: $icon-font-size;
        margin-top: 4px;
      }

      &.bar-text {
        font-size: rem(24);
      }
    }

    &.item-active {
      color: #fe9808;
    }
  }
</style>
