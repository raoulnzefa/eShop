<template>
  <ul class="layout-footbar" v-if="isShow">
    <footbarItem :iconCls="item.icon" :text="item.text" :index="index"
                 v-for="(item,index) in barData" :key="index" @barClick="barClick" :barIndex="barIndex"
                 :path="item.path"></footbarItem>
  </ul>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  import footbarItem from './footbar-item'

  export default {
    computed: {
      barData: () => [
        {
          icon: 'fa-home',
          text: '首页',
          path: '/home'
        },
        {
          icon: 'fa-shopping-cart',
          text: '店铺',
          path: '/shop'
        },
        {
          icon: 'fa-user-circle',
          text: '我的',
          path: '/member'
        }
      ]
    },
    data () {
      return {
        barIndex: this.index
      }
    },
    components: {
      footbarItem
    },
    props: {
      isShow: {
        default: true
      },
      index: {
        type: Number,
        default: 0
      }
    },
    methods: {
      barClick (index) {
        console.log('bar click')
        this.barIndex = index
      }
    }
  }
</script>
<style lang="scss">
  @import "utils";

  .layout-footbar {
    height: $footbar-width;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    @extend %clearfix;

    &:before{
      display: block;
      content: '';
      width: 100%;
      position: absolute;
      top:0;
      border-top: 1px solid #9d9d9d;
      border-bottom: 1px solid #dedede;
    }
  }
</style>
