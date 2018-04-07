<template>
  <section class="about">
    <v-card class="about-card" width="320px">
      <v-card-media height="320px">
        <img src="~@/assets/head.webp"/>
      </v-card-media>
      <v-card-title class="pb-0">
        <v-container style="padding:0;">
          <v-layout row wrap>
            <v-flex class="headline" xs12>Jiahui.Liang</v-flex>
            <v-flex xs6><i class="iconfont icon-location"/>Guangzhou</v-flex>
            <v-flex xs6><i class="iconfont icon-birthday"/>1993/04/22</v-flex>
            <v-flex xs6><i class="iconfont icon-qq"/>563303226</v-flex>
            <v-flex xs6><i class="iconfont icon-wechat"/>Chrisiv</v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange" href="https://github.com/L-Chris" target="_blank">Github</v-btn>
      </v-card-actions>
    </v-card>
  </section>  
</template>

<script>
  
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  &-card {
    .iconfont {
      margin-right: 2px;
    }
  }
}
</style>
