<template>
  <div class="case-wrap">
    <CommonTitle :mainTitle="`服务流程`" :subTitle="`Service Process`"></CommonTitle>
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="{reverse: index % 2}">
        <div>{{item.name}}</div>
        <div><img :src="item.image" alt=""></div>
        <div></div>
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
      list: [
        {name: '需求调研', image: require('@/assets/images/service_0.png')},
        {name: '合同签订', image: require('@/assets/images/service_1.png')},
        {name: '交互设计', image: require('@/assets/images/service_2.png')},
        {name: '视觉设计', image: require('@/assets/images/service_3.png')},
        {name: 'APP开发', image: require('@/assets/images/service_4.png')},
        {name: '后端开发', image: require('@/assets/images/service_5.png')},
        {name: '上线部署', image: require('@/assets/images/service_6.png')},
        {name: '运营推广', image: require('@/assets/images/service_7.png')},
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
  }
  .case-wrap ul:before{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    width:1200px;
    height:4px;
    background:rgba(179,195,221,.2);
  }
  .case-wrap ul li{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    flex: 0 0 12.5%;
    height: 260px;
  }
  .case-wrap ul li::after{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width:6px;
    height:30px;
    background:linear-gradient(180deg,rgba(58,106,214,1) 0%,rgba(99,166,245,1) 100%);
  }
  .case-wrap ul li.reverse{
    flex-direction: column;
  }
  .case-wrap ul li div:first-child{
    height:33px;
    font-size:24px;
    font-weight:500;
    line-height:33px;
    color:rgba(136,157,191,1);
    opacity:1;
  }
  .case-wrap ul li div:nth-child(2){
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .case-wrap ul li div:last-child{
    flex: 0 0 60%;
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
