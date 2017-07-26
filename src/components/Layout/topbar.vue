<template>
  <section class="layout-main">
    <ul class="cols-3-divide tb">
      <li>
        <a v-if="hasPrev" @click="toPrev" class="tb-icon"><i class="fa fa-chevron-left"></i></a>
      </li>
      <li>
        <span class="tb-title">{{pageTitle}}</span>
      </li>
      <li>
        <component :is="rightCmp" v-if="rightCmp"></component>
      </li>
    </ul>
  </section>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  import barLink from './topbars/bar-link'

  export default {
    props: {
      pageTitle: {
        required: true,
        type: String
      },
      rightCmp: String,
      hasPrev: {
        default: true
      }
    },
    components: {
      barLink
    },
    computed: {},
    data () {
      return {}
    },
    methods: {
      toPrev () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss">
  @import "utils";

  .tb {
    height: $topbar-height;

    :first-child {
      text-align: left;
    }

    li {
      height: 100%;
      line-height: $topbar-height;
    }

    .tb-icon {
      display: block;
      margin-left: rem(12);
      font-size: rem(40);
      font-weight: 400;
      color: #5a5a5a;
    }

    .tb-title {
      display: block;
      font-size: rem(32);
      color: #020202;
      text-align: center;
    }
  }
</style>
