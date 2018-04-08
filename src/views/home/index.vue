<template>
  <v-app class="home">
    <v-toolbar color="transparent" flat>
      <v-toolbar-title>GreedZone</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round flat to="/">Home</v-btn>
      <v-btn round flat to="/article">Articles</v-btn>
      <v-btn round flat to="/project">Projects</v-btn>
      <v-btn round flat to="/about">About</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view class="view"/>
      </v-container>
    </v-content>
    <v-footer color="transparent" app fixed></v-footer>
  </v-app>
</template>

<script>
</script>

<style scoped>
.home {
  background-image: url('~@/assets/bg.webp');
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
