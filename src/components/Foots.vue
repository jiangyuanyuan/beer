<template>
  <div class="foots-wrap">
    <div class="foots content-1200">
      <div></div>
      <div>
        <ul>
          <li>首页</li>
          <li>解决方案</li>
          <li>关于我们</li>
        </ul>
        <div>Copyright © 2017 beer-smart Inc. 保留所有权利。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: 'MidNav',
  props: [],
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
    goPage(pageConf){
      this.$route.name !== pageConf.path &&
        this.$router.push({name: pageConf.path})
    }
  },
  mounted() {
  },
  beforeDestroy () {
  },
}
</script>

<style scoped>
  .foots-wrap{
    position: relative;
    bottom: 0;
    width: 100%;
    background:rgba(38,39,50,1);
    overflow: hidden;
    flex: 0 0 235px;
    height: 235px;
  }
  .foots{
    display: flex;
    height: 100%;
  }
  .foots>div{
    flex: 1 1 0;
    height: 100%;
    display: flex;
    color: #fff;
    flex-direction: column;
  }
  .foots>div>ul{
    padding-top: 60px;
    display: flex;
    padding-left: 85px;
  }
  .foots>div>div{
    padding-left: 85px;
    display: flex;
    flex: 1 1 0;
    padding-bottom: 30px;
    align-items: flex-end;
  }
  .foots>div>ul>li{
    cursor: pointer;
    flex: 1 1 0;
  }
  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    .foots-wrap{
      position: relative;
      width: 100%;
      background:rgba(38,39,50,1);
      overflow: hidden;
      transition: all 1s;
      flex: 0 0 8px;
      height: 8rem;
    }
    .foots{
      display: flex;
    }
    .foots>div{
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      color: #9b9b9b;
    }
    .foot-logo{
      padding-top: 3rem;
    }
    .foot-logo > div > div:first-child{
    }
    .foot-logo > div > div:first-child span{
      padding-left: .5rem;
    }
    .foot-logo img{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 1.6rem;
    }
    .foot-logo > div > div:last-child{
      padding-top: .4rem;
      font-size: .3rem;
    }
    .foot-nav{
    }
    .foot-nav>div{
      padding-top: 2rem;
    }
    .foot-nav>div>div>img{
      width: .65rem;
      height: .65rem;
      margin-right: .25rem;
    }
    .foot-nav span{
      font-size: .7rem;
    }
    .foot-nav p{
      padding-top: .6rem;
      font-size: .6rem;
    }
    .foot-nav p:hover{
    }
  }
  @media (max-width: 576px) {
  }
</style>
