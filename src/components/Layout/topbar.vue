<template>
  <section class="layout-main">
    <ul class="cols-3-divide">
      <li>
        <router-link :to=""><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
      </li>
      <li>
        <span>{{pageTitle}}</span>
      </li>
      <li>

      </li>
    </ul>
  </section>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    props: {
      pageTitle: {
        required: true
      },
      hasPrev: {
        default: false
      },
      prevPath: String
    },
    computed: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "utils";

  .layout-topbar {
    padding: 0 rem(15);

  }
</style>
