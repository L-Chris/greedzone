<template>
  <v-card width="880px">
    <v-card-media class="white--text" height="240px" src="http://pic2.52pk.com/files/160216/5329500_160443_1.png">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">Top 10 Australian beaches</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <div>{{content}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" :to="`/article/${id}`">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: '页面性能差的直接后果是用户需要等待，而等待，尤其是不确定要多长时间的等待会给用户带来焦虑，为了尽早的结束这种焦虑，除非访问网页是刚需，用户通常会选择直接关闭页面。从实际数据来看，性能差是页面高跳出率的重要原因之一。以下内容部分来自网络并且结合个人理解持续更新'
    }
  }
}
</script>
