<template>
  <div class="case-wrap">
    <CommonTitle :mainTitle="`解决方案`" :subTitle="`Solution`"></CommonTitle>
    <div class="case-switch">
      <span :class="{active: solution === 'International'}" @click="solution = 'International'">International</span>
      <span :class="{active: solution === 'China'}" @click="solution = 'China'">China</span>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div>
          <img :src="item.image" alt="">
          <span><img :src="require('@/assets/images/view.png')" alt="">46</span>
        </div>
        <div>{{item.name}}</div>
        <div>{{item.subName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Loading from "./Loading";
import CommonTitle from "./CommonTitle";

export default {
  components: {
    Loading,
    CommonTitle
  },
  name: 'Records',
  props: ['isLoading', 'listData'],
  data() {
    return {
      solution: 'International',
      list: [
        {name: '云计算', subName: 'Cloud', image: require('@/assets/images/solution_demo.png')},
        {name: '大数据', subName: 'Big Data', image: require('@/assets/images/solution_2.png')},
        {name: 'Android应用', subName: 'Android app', image: require('@/assets/images/solution_3.png')},
        {name: 'IOS应用', subName: 'IOS app', image: require('@/assets/images/solution_4.png')},
        {name: 'Web网站', subName: 'Web site', image: require('@/assets/images/solution_5.png')},
        {name: '小程序', subName: 'Applets', image: require('@/assets/images/solution_6.png')},
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  mounted() {
  },
  beforeDestroy () {
  },
}
</script>

<style scoped>
  .case-switch{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .case-switch>span{
    flex: 0 0 180px;
    height:48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #385CAD;
    background:rgba(255,255,255,1);
    border:1px solid rgba(56,92,173,1);
    border-radius:4px 0px 0px 4px;
    cursor: pointer;
    transition: all .3s;
  }
  .case-switch>span.active{
    color: #fff;
    background:rgba(56,92,173,1);
  }
  .case-switch>span:last-child{
    border-radius: 0px 4px 4px 0px;
  }
  .case-wrap{
    display: flex;
    flex-direction: column;
  }
  .case-wrap ul{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 20px 0;
    flex-wrap: wrap;
  }
  .case-wrap ul li{
    display: flex;
    flex-direction: column;
    flex: 0 0 33.3%;
    padding: 7px;
  }
  .case-wrap ul li div:first-child{
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    background-color: #fff;
    opacity:1;
    position: relative;
  }
  .case-wrap ul li div:nth-child(2){
    padding: 17px 20px;
    font-size:18px;
    font-weight:bold;
    color:rgba(56,92,173,1);
    background-color: #fff;
  }
  .case-wrap ul li div:last-child{
    font-size:14px;
    color:rgba(179,195,221,1);
    background-color: #fff;
    padding: 0 20px 30px 20px;
  }
  .case-wrap ul li span{
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 70px;
    width: 70px;
    background:rgba(56,92,173,.3);
    border-radius:50%;
    font-size:21px;
    color:rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
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
