<template>
  <ul class="footbar">
    <li :class="['bar-item', {'item-active': barIndex === 0}]" @click="barClick(0)">
      <span><i class="fa fa-home" aria-hidden="true"></i></span>
      <span>首页</span>
    </li>
    <li :class="['bar-item', {'item-active': barIndex === 1}]" @click="barClick(1)">
      <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
      <span>店铺</span>
    </li>
    <li :class="['bar-item', {'item-active': barIndex === 2}]" @click="barClick(2)">
      <span><i class="fa fa-user-circle" aria-hidden="true"></i></span>
      <span>我的</span>
    </li>
  </ul>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        barIndex: 2
      }
    },
    props: {
      isShow: {
        required: true,
        default: true
      },
      wrapClass: {}
    },
    methods: {
      barClick (index) {
        this.barIndex = index
        this.$emit('click-bar', index)
      }
    }
  }
</script>
<style lang="scss">
  @import "utils";

  .footbar {
    height: $footbar-width;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    @extend %clearfix;
  }

  .bar-item {
    width: 33%;
    float: left;
    text-align: center;
    cursor: pointer;

    &:nth-child(2) {
      width: 34%;
    }

    > span {
      display: block;
    }

    &.item-active {
      color: #eecb30;
    }
  }

</style>
