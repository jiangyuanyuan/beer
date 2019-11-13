<template>
  <div class="case-wrap">
    <div>
      <div>
        <div class="contact-title">联系我们</div>
        <div class="contact-phone">15622501009</div>
        <div class="contact-address">深圳市南山区科兴科技园A座1409</div>
        <div class="contact-time">281421465@qq.com（周一至周日：7:00 - 24:00）</div>
      </div>
    </div>
    <div></div>
  </div>
</template>


<style scoped>
  .case-wrap{
    margin: 0 auto;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .case-wrap>div{
    flex: 1 1 0;
  }
  .case-wrap>div:first-child>div{
    padding: 16px 33px;
    position: relative;
    z-index: 1;
    background-color: #385CAD;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    transform: translateY(50%);
    color: #fff;
  }
  .contact-title{
    font-size:18px;
    padding-bottom: 20px;
  }
  .contact-phone{
    font-size:36px;
    padding-bottom: 30px;
  }
  .contact-address{
    font-size:18px;
    opacity: .7;
    padding-bottom: 10px;
  }

  .contact-time{
    font-size:18px;
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
