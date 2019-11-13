<template>
  <div class="records-title">
    <div>{{$t('all.lotteryRecord')}}</div>
    <div>
      <span>{{$t('all.openTime')}}</span>
      <span>
            <datetime type="datetime" v-model="conf.startDate" format="yyyy-MM-dd HH:mm:ss"></datetime>
            <b @click="conf.startDate= ``" v-if="conf.startDate">x</b>
          </span>
      <span>
            <datetime type="datetime" v-model="conf.endDate" format="yyyy-MM-dd HH:mm:ss"></datetime>
            <b @click="conf.endDate= ``" v-if="conf.endDate">x</b>
          </span>
    </div>
  </div>
</template>

<script>
  import {windowWidth} from "../utils/windowWidth";

  export default {
    components: {},
    name: 'Records',
    props: ['conf'],
    data() {
      return {
        startDate: '',
        endDate: '',
        datePickerConf: {show: false, choseTime: "2019-04-28"},
        windowWidth,
      }
    },
    computed: {
      isSmallScreen() {
        return this.windowWidth.offsetWidth <= 1200;
      }
    },
    methods: {},
    watch: {},
    mounted() {
    },
    beforeDestroy() {
    },
  }
</script>

<style lang="less" scoped>
  .records-title {
    height: 70px;
    display: flex;
    padding: 0 16px;
  }

  .records-title > div:first-child {
    flex: 1 1 0;
    line-height: 70px;
    font-size: 24px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .records-title > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .records-title > div:last-child > span:first-child {
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .records-title > div:last-child > span:not(:first-child) {
    display: flex;
    margin-left: 10px;
    padding: 0 16px;
    width: 330px;
    height: 40px;
    line-height: 40px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(198, 198, 204, 1);
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }

  .records-title > div:last-child > span:not(:first-child) > *:first-child {
    flex: 1 1 0;
  }

  /deep/ .records-title > div:last-child > span:not(:first-child) input {
    height: 100%;
  }

  .records-title b {
    color: #666;
    cursor: pointer;
    padding-left: 4px;
  }

  @media (min-width: 1201px) {
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    .records-title {
      height: 2.5rem;
      padding: 0 .6rem;
    }

    .records-title > div:first-child {
      line-height: 2.5rem;
      font-size: 1rem;
    }

    .records-title > div:last-child {

    }

    .records-title > div:last-child > span:first-child {
      font-size: .6rem;
    }

    .records-title > div:last-child > span:not(:first-child) {
      margin-left: .25rem;
      padding: 0 .6rem;
      width: 6.25rem;
      height: 1.4rem;
      line-height: 1.4rem;
      border-radius: .2rem;
      font-size: .55rem;
    }
  }

  @media (max-width: 768px) {
    .records-title {
      height: auto;
      padding: 0 .4rem;
      flex-direction: column;
    }

    .records-title > div:first-child {
      line-height: 1.75rem;
      font-size: .8rem;
    }

    .records-title > div:last-child {
      padding: .3rem 0;
    }

    .records-title > div:last-child > span:first-child {
      font-size: .4rem;
      padding-right: .35rem;
    }

    .records-title > div:last-child > span:not(:first-child) {
      flex: 1 1 0;
      margin-left: .25rem;
      padding: 0 .4rem;
      width: 4rem;
      height: 1.6rem;
      line-height: 1.6rem;
      border-radius: .1rem;
      font-size: .35rem;
    }

    /deep/ .vdatetime-input {
      line-height: 1rem;
      padding: .3rem;
      color: #666;
    }
  }

  @media (max-width: 576px) {
    .records-title > div:last-child > span:first-child {
      display: none;
    }
  }
</style>
