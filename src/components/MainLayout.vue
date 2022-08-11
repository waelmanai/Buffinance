<template>
  <div ref="scrollSections" class="hello">
    <Nav />
    <Header />
    <WhyUs />
    <Rated />
    <StayHome />
    <Partnership />
    <Community />
  </div>
</template>

<script>
import locomotiveScroll from "locomotive-scroll";
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import WhyUs from '@/components/WhyUs'
import Rated from '@/components/Rated'
import StayHome from '@/components/StayHome'
import Partnership from '@/components/Partnership'
import Community from '@/components/Community'
export default {
  name: "locoScroll",
  props: {
    msg: String
  },
  components: {
    Nav,
    Header,
    WhyUs,
    Rated,
    StayHome,
    Partnership,
    Community
  },
  data() {
    return {
      scrollIns: null
    };
  },
  mounted() {
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new locomotiveScroll({
        el: _self.$refs['scrollSections'],
        smooth: true,
        smoothMobile: true,
        getDirection: true
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
