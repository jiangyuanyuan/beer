<template>
  <div class="records-table">
    <ul><li><div>{{$t('all.lotteryType')}}</div><div>{{$t('all.stageNo')}}</div><div>{{$t('all.luckyCode')}}</div><div>{{$t('all.openTime')}}</div></li></ul>
    <ul>
      <div class="records-table-inner">
        <li v-for="(item) in listData" :key="item.id">
          <div>{{item.lotteryName}}</div>
          <div>{{item.periodNo}}</div>
          <div><span v-for="(num, index) in item.lotteryNumber" :key="index"><b>{{num}}</b></span></div>
          <div>{{item.created}}</div>
        </li>
      </div>
      <Loading :loading="isLoading"></Loading>
    </ul>
  </div>
</template>

<script>
import Loading from "./Loading";
export default {
  components: {
    Loading,
    // DatePicker
  },
  name: 'Records',
  props: ['isLoading', 'listData'],
  data() {
    return {
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

<style scoped>
  .records-table span {
    padding: 0 12px;
  }
  .records-table span b{
    display: flex;
    height: 24px;
    width: 24px;
    justify-content: center;
    align-items: center;
    font-size:16px;
    font-weight:bold;
    color:#fff;
    background-color: #E3673A;
    border-radius: 12px;
  }
  .records-table>ul:first-child{
    background-color: #FED017;
  }
  .records-table>ul:last-child{
    position: relative;
    min-height: 600px;
    overflow: hidden;
  }
  .records-table>ul:last-child::-webkit-scrollbar{
    width: 1px;

  }
  .records-table>ul:last-child::-webkit-scrollbar-thumb{
    background-color: #FED017;
  }
  .records-table ul li:not(:last-child) > div{
    border-bottom: 1px solid #eee;
  }
  .records-table li > div{
    padding: 20px 6px;
    font-size: 16px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .records-table li > div:not(:last-child){
    border-right: 1px solid #eee;
  }
  .records-table li{
    display: flex;
    height: 50px;
  }
  .records-table{
    margin: 10px 15px;
    border: 1px solid #eee;
  }

  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
    .records-table{
      margin: 10px 15px;
      border: 1px solid #eee;
    }

    .records-table span {
      padding: 0 .15rem;
    }
    .records-table span b{
      height: 1rem;
      width: 1rem;
      font-size: .6rem;
      border-radius: .5rem;
    }
    .records-table li > div{
      font-size:.6rem;
      padding: .4rem;
    }
    .records-table li > div:not(:last-child){
    }
    .records-table li{
    }
    .records-table{
      margin: .25rem .375rem;
    }
  }
  @media (max-width: 768px) {
    .records-table span {
      padding: 0 .1rem;
    }
    .records-table span b{
      height: auto;
      width: auto;
      font-size: .6rem;
      background-color: #fff;
      color: #E3673A;
    }
    .records-table li > div{
      flex-wrap: wrap;
      font-size:.5rem;
      padding: .3rem .3rem;
    }
    .records-table li > div:not(:last-child){
    }
    .records-table li{
      display: flex;
      height: auto;
    }
    .records-table{
      margin: .25rem .375rem;
    }
  }
  @media (max-width: 576px) {
  }
</style>
