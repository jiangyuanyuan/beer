<template>
  <div class="case-wrap">
    <CommonTitle :mainTitle="`合作伙伴`" :subTitle="`Partner`"></CommonTitle>
    <div class="slide-content">
      <span @click="prev"><img :src="require('@/assets/images/prev.png')" alt=""></span>
      <div>
        <div :style="{transform: `translateX(-${current}00%)`}">
          <ul v-for="(lists, index) in renderList" :key="index">
            <li v-for="(item, index) in lists" :key="index" :class="{reverse: index % 2}">
              <div><img :src="item.image" alt=""></div>
            </li>
          </ul>
        </div>
      </div>
      <span @click="next"><img :src="require('@/assets/images/next.png')" alt=""></span>
    </div>
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
      current: 0,
      list: [
        {name: 'sadas', image: require('@/assets/images/partner_demo.png')},
        {name: 'sadas', image: require('@/assets/images/partner_2.png')},
        {name: 'sadas', image: require('@/assets/images/partner_3.png')},
        {name: 'sadas', image: require('@/assets/images/partner_4.png')},
      ]
    }
  },
  computed: {
    renderList(){
      const ret =[];
      let now;
      this.list.forEach((item, index) => {
        if (!(index % 3)) {
          now = [];
          ret.push(now)
        }
        now.push(item);
      });
      return ret;
    }
  },
  methods: {
    prev(){
      if (this.current>0)
        this.current --
    },
    next(){
      if (this.current < this.renderList.length - 1)
        this.current ++;
    },
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
    margin: 0 auto;
    width: 1200px;
    padding-bottom: 100px;
  }
  .slide-content{
    display: flex;
    align-items: center;
  }
  .slide-content>div{
    flex: 1 1 0;
    overflow: hidden;
    flex-wrap: nowrap;
    display: flex;
  }
  .slide-content>div>div{
    flex: 1 1 0;
    flex-wrap: nowrap;
    display: flex;
    transition: all .3s;
  }
  .case-wrap ul{
    display: flex;
    flex: 0 0 100%;
    margin: 0 auto;
    position: relative;
    padding: 20px 0;
  }
  .case-wrap ul li{
    position: relative;
    flex: 0 0 33.3%;
    padding: 10px;
    text-align: center;
  }
  .case-wrap ul li div{
    background-color: #fff;
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
