<template>
  <div class="container">
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>
<script>
  import footbar from './Layout/footbar'

  export default {
    name: 'app',
    components: {
      footbar
    }
  }
</script>
