<template>
  <div class="common-title">
    <div class="main-title">{{mainTitle}}</div>
    <div class="sub-title">{{subTitle}}</div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'Records',
    props: ['mainTitle', 'subTitle'],
  }
</script>

<style lang="less" scoped>
  .common-title{
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 50px;
  }
  .main-title{
    font-size:36px;
    font-weight: bold;
    color:rgba(26,31,51,1);
    padding-bottom: 12px;
  }
  .sub-title{
    font-size:18px;
    color:rgba(136,157,191,1);
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
