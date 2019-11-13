<template>
    <div class="records content-1200" ref="tableWrap">
      <RecordsTitle :conf="pagingConf"></RecordsTitle>
      <RecordList :isLoading="isLoading" :listData="listData"></RecordList>
      <Paging :conf="pagingConf"/>
    </div>
</template>

<script>
import http from  '@/http/index.js';
import RecordsTitle from "./RecordsTitle.vue";
import RecordList from "./RecordList.vue";
import Paging from "./Paging.vue";
import {windowWidth} from "../utils/windowWidth";

export default {
  components: {
    Paging, RecordsTitle, RecordList,
  },
  name: 'Records',
  props: ['scrollConf'],
  data() {
    return {
      datePickerConf:{show: false, choseTime: "2019-04-28"},
      windowWidth,
      isLoading: false,
      pagingConf: {
        startDate: '',
        endDate: '',
        currentPageIndex: 1,
        maxPageNum: 10,
        size: 30,
        total: 0,
      },
      listData: [],
    }
  },
  computed: {
    isSmallScreen(){
      return this.windowWidth.offsetWidth <= 1200;
    }
  },
  methods: {
    onScroll(ev){
      this.scrollConf.wrapScrollTop = ev.target.scrollTop;
    },
    getList(isRefresh, shallNotScrollInToView){
      // throw new Error();
      if (this.isLoading) return;
      this.isLoading = true;
      const {currentPageIndex, size, startDate, endDate} = this.pagingConf;
      size && http.lotteryRecord({
        current: isRefresh ? 1 : currentPageIndex,
        size,
        startDate, endDate
      }).then(res => {
        setTimeout(() => {this.isLoading = false;},800);
        shallNotScrollInToView || this.$refs.tableWrap.scrollIntoView({behavior: "smooth"});
        const {records, current, size, total, pages}  = res.data;
        const {pagingConf}  = this;
        this.listData = records;
        isRefresh || (pagingConf.currentPageIndex = current);
        pagingConf.size = size;
        pagingConf.total = total;
        pagingConf.maxPageNum = pages;
      }).catch(() => {
        console.log(e)
        this.isLoading = false;
      });
    }
  },
  watch: {
    'pagingConf.startDate'(){
      const {endDate, startDate} = this.pagingConf;
      if (startDate && endDate) {
        if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
          this.pagingConf.endDate = startDate;
        }
      }
      if (startDate && /T[\d]{2}:[\d]{2}:([\d]{2})/.test(startDate)) {
        this.pagingConf.startDate = startDate.replace(/(T[\d]{2}:[\d]{2}:)[\d]{2}/, function (a, b) {
          return `${b}00`
        });
      }
      this.getList();
    },
    'pagingConf.endDate'(){
      const {endDate, startDate} = this.pagingConf;
      if (startDate && endDate) {
        if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
          this.pagingConf.startDate = endDate;
        }
      }
      if (endDate && /T[\d]{2}:[\d]{2}:([\d]{2})/.test(endDate)) {
        this.pagingConf.endDate = endDate.replace(/(T[\d]{2}:[\d]{2}:)[\d]{2}/, function (a, b) {
          return `${b}59`
        });
      }
      this.getList();
    },
    'pagingConf.currentPageIndex'(){
      this.getList();
    },
    'pagingConf.size'(){
      this.getList();
    },
  },
  mounted() {
    this.getList(false, true);
    this.windowWidth.offsetWidth = document.body.offsetWidth;
  },
  beforeDestroy () {
  },
}
</script>

<style lang="less" scoped>
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    height: 0;
    margin-bottom: 0;
  }
  .loading.active{
    height: 200px;
    margin-bottom: -200px;
  }
  .records{
    background:rgba(255,255,255,1);
    border-radius:4px;
    margin-bottom: 100px;
  }


  @media (max-width: 1200px) {
    .records{
      border-radius: .1rem;
    }
  }
</style>
