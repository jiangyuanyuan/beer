<template>
  <div class="head-nav-wrap" :class="wrapClass">
    <HeadLogo :scrollConf="scrollConf"></HeadLogo>
  </div>
</template>
<script>
  import HeadLogo from './HeadLogo';
  export default {
    components: {HeadLogo},
    name: 'Heads',
    props: ['scrollConf'],
    data() {
      return {}
    },
    computed: {
      wrapClass(){
        console.log(this.scrollConf.wrapScrollTop > 370)
        return {
          dark: this.scrollConf.wrapScrollTop > 370
        }
      }
    },
    methods: {
      isActive(item) {
        return location.hash.split(/\?/).shift().split(/[\\/]/).pop() === item.path;
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
  }
</script>

<style scoped>
  .head-nav-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    transition: all .3s;
  }
  .head-nav-wrap.dark{
    background-color: rgba(56,92,173,.6);
  }
</style>
<style lang="less" scoped>

  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
</style>
