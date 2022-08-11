<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
export default {
  name: 'App',
  components: {
    MainLayout,
  }
}
</script>

<style>
#app{
    font-family: Poppins;
}
.scroll {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
}
</style>
