<template>
  <div class="container">
    <topbar :page-title="pageInfo.title" :right-cmp="pageInfo.rightCmp" v-if="pageInfo.showTop"></topbar>
    <layout-main>
      <transition>
        <router-view></router-view>
      </transition>
    </layout-main>
    <footbar v-if="pageInfo.showFoot"></footbar>
  </div>
</template>
<script>
  import topbar from './Layout/topbar'
  import layoutMain from './Layout/layout-main'
  import footbar from './Layout/footbar'
  import pageInfo from '../constant/layout'
  import '@root/example/async&awit'

  export default {
    name: 'app',
    data () {
      return {
        pageInfo: null
      }
    },
    created () {
      this.pageInfo = pageInfo(this.routeName)
    },
    computed: {
      routeName () {
        return this.$store.state.route.name
      }
    },
    watch: {
      '$route': function () {
        this.pageInfo = pageInfo(this.routeName)
      }
    },
    components: {
      topbar,
      layoutMain,
      footbar
    },
    methods: {}
  }
</script>
