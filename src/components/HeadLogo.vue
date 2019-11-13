<template>
  <div class="head-nav content-1200">
    <img class="nav-logo" :src="logoUrl" alt="">
    <span>{{webName}}</span>
    <div>
      <ul v-for="(item, index) in nav" :key="index" :class="{list: item.length > 1}" @click="handelNavClick(index)">
        <li :class="{seLang: na.lang === lang, active: $route.name === na.route}" v-for="na in item" :key="na.value" @click="handelClick(na, item)">{{na.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {language} from "../assets/lang";
  export default {
    components: {},
    name: 'HeadLogo',
    props: ['scrollConf'],
    data() {
      return {
        lang: language,
        nav: [
          [{name: '首页', route: '首页'},],
          [{name: '解决方案', route: '解决方案'},],
          [{name: '关于我们', route: '关于我们'},],
          [
            {name: '简体中文', lang: 'zh_CN'},
            {name: '繁體中文', lang: 'zh_TW'},
            {name: 'English', lang: 'en_US'},
          ]
        ],
        language: [
          {name: '简体中文', lang: 'zh_CN'},
          {name: '繁體中文', lang: 'zh_TW'},
          {name: 'English', lang: 'en_US'},
        ],
        webName: '',
        logoUrl: require('../assets/images/logo.png'),
      }
    },
    computed: {},
    methods: {
      handelNavClick(index){
        this.scrollConf.vm.$refs[this.scrollConf.refNames[index]] && this.scrollConf.vm.$refs[this.scrollConf.refNames[index]].$el.scrollIntoView({behavior: "smooth"});
      },
      handelClick(item){
        item.lang && this.setLang(item);
      },
      setLang(lan){
        if (lan.lang !== this.lang) {
          localStorage.lang = lan.lang;
          location.reload();
        }
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
  }
</script>

<style scoped>

  .head-nav {
    display: flex;
    align-items: center;
    transition: all .3s;
    height: 112px;
  }
  .head-nav>div{
    flex: 1 1 0;
    display: flex;
    justify-content: flex-end;
  }
  .head-nav>div>ul{
    display: flex;
    align-items: center;
    padding-right: 6px;
  }
  .head-nav>div>ul.list::before{
    content: '';
    display: block;
    border-left: 4px solid #fff;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    height: 4px;
    width: 4px;
  }
  .head-nav>div>ul>li{
    color: #fff;
    padding: 0;
    overflow: hidden;
    opacity: 0;
    width: 0;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    transition: all .3s;
    cursor: pointer;
  }
  .head-nav>div>ul:not(.list)>li{
    width: auto;
    padding: 0 10px;
  }
  .head-nav>div>ul.list:hover>li,
  .head-nav>div>ul.list>li.seLang{
    width: 74px;
  }
  .head-nav>div>ul.list>li,
  .head-nav>div>ul:not(.list)>li{
    opacity: .8;
  }
  .head-nav>div>ul.list>li.seLang,
  .head-nav>div>ul:not(.list)>li.active{
    color: #fff;
  }
  .head-nav>div>ul>li:hover,
  .head-nav>div>ul.list>li.seLang{
    opacity: 1;
  }
  .nav-logo{
    /*width: 64px;*/
    height: 36px;
    transition: all .3s;
    margin-left: 0;
  }

  .head-nav span {
    color: #fff;
    padding-left: 20px;
    font-size: 32px;
  }
</style>
<style lang="less" scoped>
  @media screen and (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
    .nav-logo {
      margin-left: 10px;
    }
  }
  @media (max-width: 992px) {
    .head-nav {
    }
    .nav-logo {
      padding-left: 0;
    }
  }
  @media (max-width: 768px) {
    .head-nav {
      height: 2.5rem;
    }
    .nav-logo {
      width: 1.6rem;
      height: 1.6rem;
    }
    .head-nav span {
      font-size: 1rem;
      padding-left: .6rem;
    }
  }
  @media (max-width: 576px) {
  }
</style>
<style>

</style>
