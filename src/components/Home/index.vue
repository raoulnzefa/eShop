<template>
  <Counter :count-size="1" :delay="true" :delay-time="0.5"/>
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
