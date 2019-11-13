<template>
  <div class="authorize-page-divider">
    <!--<span>共 {{conf.maxPageNum}} 页， {{conf.total}} 条数据</span>-->
    <!--<div :class="{disabled: conf.currentPageIndex <= 0}" @click="setCurrentPage(-1)">上一页</div>-->
    <ul>
      <li :class="{disabled: conf.currentPageIndex <= 0}" @click="setCurrentPage(-1)"><</li>
      <li
        :class="{active: item === conf.currentPageIndex, btn: item !== undefined}"
        v-for="(item, index) in pageDividerConf"
        :key="index"
        @click="item !== undefined && (conf.currentPageIndex = item)"
      >{{item === undefined ? "…" : (item + 1)}}
      </li>
      <li :class="{disabled: conf.currentPageIndex >= conf.maxPageNum - 1}" @click="setCurrentPage(1)">></li>

      <b class="pre" v-if="shallShowFertherInfo"></b>
<!--      <li><input type="number" v-model="viaSize"></li>-->
      <b  v-if="shallShowFertherInfo">{{conf.size}}{{$t('all.stripPerPage')}}</b>

      <b class="pre" v-if="shallShowFertherInfo">{{$t('all.jumpTo')}}</b>
      <li v-if="shallShowFertherInfo"><input type="number" v-model="current"></li>
    </ul>
    <!--<div :class="{disabled: conf.currentPageIndex >= conf.maxPageNum - 1}" @click="setCurrentPage(1)">下一页</div>-->
  </div>
</template>
<script>
  import getList from "../utils/page";
  import {windowWidth} from "../utils/windowWidth";

  function randomStr() {
    return `${Date.now()}_${Math.random().toString().slice(2)}`;
  }

  function makeExecLater(fn) {
    let time = randomStr();
    return function () {
      const thisTime = time = randomStr();
      setTimeout(() => {
        thisTime === time && fn.apply(null, arguments);
      }, 300)
    }
  }

  export default {
    name: 'popup',
    props: ["conf"],
    data() {
      return {
        windowWidth,
        viaSize: 10,
        current: 1,
        watchViaSize: makeExecLater(() => {
          this.conf.size = +this.viaSize;
        }),
        watchCurrent: makeExecLater(() => {
          this.conf.currentPageIndex = +this.current - 1;
        })
      }
    },
    computed: {
      listLen(){
        return {
          large: 7,
          normal: 5,
          small: 5,
          mini: 3,
          min: 3
        }[this.windowWidth.type]
      },
      shallShowFertherInfo(){
        return ['large', 'normal'].includes(this.windowWidth.type);
      },
      pageDividerConf() {
        return getList(this.conf.currentPageIndex, this.conf.maxPageNum, this.listLen);
      },
    },
    mounted() {
      this.viaSize = this.conf.size;
      this.current = this.conf.currentPageIndex + 1;
    },
    watch: {
      viaSize() {
        this.current = 1;
        this.watchViaSize();
      },
      current() {
        this.current = parseInt(this.current);
        (this.current < 0 || !this.current) && (this.current = 0);
        if (this.current > this.conf.maxPageNum) {
          this.current = this.conf.maxPageNum;
        }
        this.watchCurrent();
      },
      conf() {
        this.viaSize = this.conf.size;
        this.current = this.conf.currentPageIndex + 1;
      },
      'conf.size'() {
        this.viaSize = this.conf.size;
      },
      'conf.currentPageIndex'() {
        this.current = this.conf.currentPageIndex + 1;
      },
    },
    methods: {
      setCurrentPage(oper = 0) {
        const {maxPageNum} = this.conf;
        let {currentPageIndex} = this.conf;
        currentPageIndex = currentPageIndex + oper;
        if (currentPageIndex < 0) currentPageIndex = 0;
        if (currentPageIndex >= maxPageNum) currentPageIndex = maxPageNum - 1;
        this.conf.currentPageIndex = currentPageIndex;
      },
    },
  }
</script>
<style scoped>
  .authorize-page-divider {
    flex: 0 0 auto;
    display: flex;
    padding: 20px;
    justify-content: center;
    font-size: 12px;
    align-items: center;
  }

  .authorize-page-divider > span {
    padding: 0 10px;
  }

  .authorize-page-divider > div {
    padding: 0 10px;
    cursor: pointer;
    user-select: none;
  }

  .authorize-page-divider > div.disabled {
    color: #999;
    cursor: auto;
  }

  .authorize-page-divider > ul {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: rgba(14, 14, 15, 1);
  }

  .authorize-page-divider > ul > li input {
    background-color: #fff;
    margin: 0 -6px;
    width: 98px;
    height: 100%;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(14, 14, 15, 1);
  }

  .authorize-page-divider > ul > li {
    text-align: center;
    min-width: 40px;
    padding: 0 6px;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid rgba(181, 181, 181, 1);
    margin: 0 3px;
    cursor: pointer;
    user-select: none;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .authorize-page-divider > ul > li:hover {
    transition: all .3s;
    background-color: #FED017;
    border: 1px solid #FED017;
  }

  .authorize-page-divider > ul > li.btn {
    line-height: 18px;
  }

  .authorize-page-divider > ul > li.active {
    border: 1px solid #FED017;
    background-color: #FED017;
  }

  .authorize-page-divider > ul > li.disabled {
    opacity: .6;
  }

  .authorize-page-divider > ul > li.disabled:hover {
    opacity: .6;
    background-color: #fff;
    color: #b68e65;
  }

  .authorize-page-divider b.pre {
    padding-left: 12px;
  }

  .authorize-page-divider b.tail {
    padding-right: 8px;
  }

  @media (min-width: 1201px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
    .authorize-page-divider {
      padding: .5rem;
      font-size: .4rem;
    }

    .authorize-page-divider > span {
      padding: 0 .25rem;
    }

    .authorize-page-divider > div {
      padding: 0 .25rem;
    }

    .authorize-page-divider > div.disabled {
    }

    .authorize-page-divider > ul {
      font-size: .35rem;
    }

    .authorize-page-divider > ul > li input {
      margin: 0 -125rem;
      width: 2.45rem;
      border-radius: .1rem;
      font-size: .35rem;
    }

    .authorize-page-divider > ul > li {
      text-align: center;
      min-width: 1rem;
      padding: 0 .15rem;
      height: 1rem;
      border-radius: .1rem;
      margin: 0 .075rem;
    }

    .authorize-page-divider > ul > li:hover {
      opacity: 1;
      background-color: #fff;
      color: rgba(14, 14, 15, 1);
    }

    .authorize-page-divider > ul > li.btn {
      line-height: .45rem;
    }

    .authorize-page-divider > ul > li.active {
    }

    .authorize-page-divider > ul > li.disabled {
    }

    .authorize-page-divider > ul > li.disabled:hover {
    }

    .authorize-page-divider b.pre {
      padding-left: .3rem;
    }

    .authorize-page-divider b.tail {
      padding-right: .2rem;
    }
  }
  @media (max-width: 576px) {
  }
</style>
