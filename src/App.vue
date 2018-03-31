<template>
  <div id="app">
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
::-webkit-scrollbar{
  display:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('~@/assets/bg.jpg');
  background-size: 100% 100%;
}
.view {
  height: 100%;
  width: 100%;
}
</style>
