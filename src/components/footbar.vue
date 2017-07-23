<template>
  <div class="footbar">

  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    props: {
      isShow: {
        required: true,
        default: true
      },
      activeColor: {
        default: '#fe9808'
      },
      defaultColor: {
        default: '#737373'
      }
    }
  }
</script>
<style>

</style>
