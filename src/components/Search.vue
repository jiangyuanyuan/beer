<template>
  <div class="search-wrap">
    <img :src="bg" alt="">
    <div class="search-content">
      <ul>
        <li>云计算</li>
        <li>大数据</li>
        <li>移动应用</li>
        <li>小程序</li>
      </ul>
      <div class="search-title">只有您想不到 没有我们办不到</div>
      <div class="search-group">
        <div>
          <div class="search-dropdown" :class="{active: active}" @click.stop="active = true">
            {{type}}
            <ul  @click.stop="active = false">
              <li @click="type = '全部'">全部</li>
              <li @click="type = '21312'">21312</li>
              <li @click="type = '124aws'">124aws</li>
            </ul>
          </div>
        </div>
        <input type="text">
         <span>搜索</span>
      </div>
    </div>

  </div>
</template>
<script>
  import HeadLogo from './HeadLogo';
  export default {
    components: {HeadLogo},
    name: 'Heads',
    props: [],
    data() {
      return {
        type: '全部',
        active: false,
        bg: require('@/assets/images/bg.png'),
        closeDropDown: ()=>{
          this.active = false;
        },
      }
    },
    computed: {},
    methods: {
      isActive(item) {
        return location.hash.split(/\?/).shift().split(/[\\/]/).pop() === item.path;
      },
    },
    mounted() {
      document.addEventListener('click', this.closeDropDown);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeDropDown);
    },
  }
</script>

<style scoped>
  .search-wrap {
    position: relative;
    overflow: hidden;
  }
  .search-wrap img{
    height: 100%;
    width: 100%;
  }
  .search-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding-top: 50px;
  }
  .search-content>ul{
    display: flex;
  }
  .search-content>ul>li{
    padding: 0 20px;
    font-weight: bold;
    font-size: 50px;
    white-space: nowrap;
  }
  .search-title{
    text-align: center;
    font-size:30px;
    color:rgba(255,255,255,1);
    padding-top: 20px;
    padding-bottom: 120px;
  }
  .search-group{
    display: flex;
    width:960px;
    background:rgba(255,255,255,.2);
    border:1px solid rgba(112,112,112,.2);
    border-radius:4px;
    align-items: center;
    padding: 23px 40px;
  }
  .search-group>span{
    height:60px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 0 50px;
    background:linear-gradient(266deg,rgba(58,106,214,1) 0%,rgba(99,166,245,1) 100%);
    box-shadow:0 10px 6px rgba(0,0,0,0.16);
    opacity:1;
    border-radius:2px;
    cursor: pointer;
    user-select: none;
  }
  .search-group>span:active{
    opacity: .9;
  }

  .search-group>div{
    display: flex;
    flex: 1 1 0;
    background-color: #fff;
    border-radius: 4px 0 0 4px;
  }

  .search-group>div>div{
    height: 60px;
    width: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #889DBF;
  }
  .search-group>div>div:after{
    content: '';
    display: block;
    width: 1px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #B3C3DD;
  }
  .search-group>input{
    height: 60px;
    line-height: 30px;
    background-color: #fff;
    padding: 0 20px;
    margin-right: 20px;
    border-radius: 0 4px 4px 0;
  }
  .search-dropdown{
    position: relative;
    cursor: pointer;
  }
  .search-dropdown>ul{
    opacity: 0;
    transition: all .3s;
    overflow: hidden;
    position: absolute;
    top: 100%;
    background-color: #fff;
    min-width: 100%;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
  }
  .search-dropdown.active>ul{
    opacity: 1;
  }
  .search-dropdown>ul>li{
    padding: 0 10px;
    background-color: #fff;
    cursor: pointer;
    transition: all .3s;
    line-height: 0;
    height: 0;
  }
  .search-dropdown.active>ul>li{
    line-height: 30px;
    height: 30px;
  }
  .search-dropdown>ul>li:hover{
    background-color: #eee;
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
