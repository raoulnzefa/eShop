<template>
  <div class="container">
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>
<script>
  import footbar from './footbar'

  export default {
    name: 'app',
    components: {
      footbar
    }
  }
</script>
