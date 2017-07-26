<template>
  <div class="layout-main lm-reg">
    <slot></slot>
  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    props: {},
    computed: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "utils";

  .lm-reg{
    position: absolute;
    top: $topbar-height;
    bottom: $footbar-height;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
</style>
