<template>
  <Wrap :scrollConf="scrollConf">
    <Heads :scrollConf="scrollConf" ref="heads"/>
    <Search/>
    <Case></Case>
    <Service></Service>
    <Solution ref="solution"></Solution>
    <Partner></Partner>
    <ContactUs ref="contactUs"></ContactUs>
    <Foots/>
  </Wrap>
</template>
<script>
  import Foots from "../../components/Foots";
  import Case from "../../components/Case";
  import Heads from "../../components/Heads";
  import Service from "../../components/Service";
  import Search from "../../components/Search";
  import Solution from "../../components/Solution";
  import Partner from "../../components/Partner";
  import Wrap from "../../components/Wrap";
  import ContactUs from "../../components/ContactUs";

  export default {
    components: {
      Heads,
      Foots,
      Wrap,
      Search,
      Case,
      Service,
      Solution,
      Partner,
      ContactUs
    },
    name: 'index',
    computed: {
    },
    data() {
      return {
        scrollConf: {
          vm: this,
          refNames: ['heads', 'solution', 'contactUs'],
          isTop: true,
          isBottom: false,
          wrapScrollTop: 0,
        },
      }
    },
    methods: {
    },
    mounted() {
    },
    watch: {
    },
  }
</script>

<style scoped lang="less">
</style>
