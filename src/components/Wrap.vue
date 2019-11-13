<template>
  <div class="viewport">
    <slot name="head"></slot>
    <div class="content" @scroll="onScroll($event)">
      <slot></slot>
    </div>
    <slot name="foot"></slot>
  </div>
</template>
<script>
  export default {
    components: {
    },
    name: 'index',
    computed: {
    },
    props: ['scrollConf'],
    data() {
      return {
      }
    },
    methods: {
      onScroll(ev){
        this.scrollConf.wrapScrollTop = ev.target.scrollTop;
      }
    },
    mounted() {
    },
    watch: {},
  }
</script>

<style scoped lang="less">
</style>
