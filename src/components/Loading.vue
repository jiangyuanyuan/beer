<template>
    <div class="loading" :class="{active: loading}">
      <div class="loading-mask-real"></div>
      <div class="loading-mask"></div>
      <div class="loading-text">
        loading...
        <span><b></b></span>
      </div>
    </div>
</template>
<script>
export default {
  components: {},
  name: 'Countings',
  props: ['loading'],
  data() {
    return {}
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy () {
  },
}
</script>

<style lang="less" scoped>
  .loading{

  }
  .loading-mask-real,
  .loading-mask{
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    opacity: 0;
    left: 0;
    top: 0;
  }
  .loading-mask{
    opacity: 1;
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, .5));
  }
  .loading-mask,
  .loading-text{
    transition: all .3s;
  }
  .loading-text{
    position: absolute;
    width: 100%;
    height: 300px;
    transform: translateY(-100%);
    top: 0;
    left: 0;
    display: flex;
    font-size: 12px;
    color: #161221;
    justify-content: center;
    align-items: center;
  }
  .loading.active .loading-mask-real,
  .loading.active .loading-mask,
  .loading.active .loading-text{
    transform: translateY(0);
    opacity: 1;
  }

  .loading-text span{
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid #161221;
    animation: rotating 1.2s cubic-bezier(.4, .1, .4,.9) infinite;
  }
  .loading-text span b{
    position: absolute;
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
    transform-origin: 0 50%;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #FED017;
    animation: gettingBigger 1.2s cubic-bezier(.4, .1, .4,.9) infinite;
  }
  @keyframes gettingBigger {
    0% {transform: scale(1, 1)}
    60% {transform: scale(2, 2)}
    100% {transform: scale(1, 1)}
  }
  @keyframes rotating {
    0% {transform: translate(-50%, -50%) rotate(90deg)}
    100% {transform: translate(-50%, -50%) rotate(450deg)}
  }
</style>
