<template>
  <Counter v-bind:count-size="1"/>
</template>
<script>
  import Counter from './Counter'

  export default {
    name: 'Home',
    components: {
      Counter
    }
  }
</script>
