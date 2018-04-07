<template>
  <section class="article">
    <ArticleCard
      class="mt-3"
      v-for="_ in list"
      :key="_.id"
      :id="_.id"
      :title="_.title"
      :cover="_.cover"
      :content="_.content"
      @click.native="handleClick(_)"/>
  </section>
</template>

<script>
import ArticleCard from './children/ArticleCard'
export default {
  components: {
    ArticleCard
  },
  data () {
    return {
      list: [
        {id: '1', title: 'vue-desin', content: '桌面端页面可视化构建程序', cover: 'http://pic2.52pk.com/files/160216/5329500_160443_1.png', link: 'https://cnodejs.org/topic/5aae5c6be7b166bb7b9ecb91'}
      ]
    }
  },
  methods: {
    handleClick ({link}) {
      window.open(link)
      // this.$router.push({
      //   path: `/article/detail?id=${id}`
      // })
    }
  }
}
</script>


<style scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}
</style>
