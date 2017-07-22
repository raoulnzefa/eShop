<template>
  <div class="example">
    <span>example: {{exampleName}}</span>
    <router-view></router-view>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    computed: {
      exampleName: () => 'example'
    }
  }
</script>
<style>

</style>
