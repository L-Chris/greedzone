<template>
  <section class="article">
    <ArticleCard class="mt-3" v-for="_ in list" :key="_.id" :id="_.id" :cover="_.cover" :content="_.content"/>
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
        {id: '1', content: '123', cover: 'http://pic2.52pk.com/files/160216/5329500_160443_1.png'},
        {id: '2', content: '123', cover: 'http://pic2.52pk.com/files/160216/5329500_160443_1.png'}
      ]
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
