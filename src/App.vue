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

<style lang="scss">
@import './styles/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  min-width: 1440px;
  min-height: 900px;
}
</style>
