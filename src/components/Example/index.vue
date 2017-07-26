<template>
  <div class="example">
    <span>example: {{name}}</span>
    <router-view></router-view>
  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState({
        name: state => state.route.name
      })
    }
  }
</script>
