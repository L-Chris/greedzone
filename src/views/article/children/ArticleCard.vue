<template>
  <v-card class="article-card" width="880px">
    <v-card-media height="200px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{title}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>
      <div>{{content}}</div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  &:hover {
    background-color: rgba(250, 250, 250, 0.3);
  }
}
</style>
