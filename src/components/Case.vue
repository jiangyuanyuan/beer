<template>
  <div class="case-wrap">
    <CommonTitle :mainTitle="`综合案例`" :subTitle="`Comprehensive case`"></CommonTitle>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div :style="{backgroundImage: `url(${item.image})`}">{{item.name}}</div>
      </li>
    </ul>
    <span>
      <img :src="require('@/assets/images/more.png')" alt="">
    </span>
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
        {name: '', image: require('@/assets/images/case_demo.png')},
        {name: '', image: require('@/assets/images/case_2.png')},
        {name: '', image: require('@/assets/images/case_3.png')},
        {name: '', image: require('@/assets/images/case_4.png')},
        {name: '', image: require('@/assets/images/case_5.png')},
        {name: '', image: require('@/assets/images/case_6.png')},
        {name: '', image: require('@/assets/images/case_7.png')},
        {name: '', image: require('@/assets/images/case_8.png')},
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
    padding: 0 10px;
    flex-wrap: wrap;
  }
  .case-wrap ul li{
    flex: 0 0 25%;
  }
  .case-wrap ul li div{
    margin: 10px;
    height: 164px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:24px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    background-size: cover;
  }
  .case-wrap span{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
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
