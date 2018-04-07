<template>
  <section class="project">
    <ProjectCard v-for="_ in projects" :key="_.id" :title="_.title" :cover="_.cover" @click.native="handleClick(_)"/>
  </section>
</template>

<script>
import components from './children'
export default {
  components: {
    ...components
  },
  data () {
    return {
      projects: [
        { id: 1, title: 'vuex-iframe-sync', cover: '123', link: 'https://github.com/L-Chris/vuex-iframe-sync' },
        { id: 2, title: 'vue-design', cover: '123', link: 'https://github.com/L-Chris/vue-design' }
      ]
    }
  },
  methods: {
    handleClick ({link}) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  grid-template-columns: 240px 240px 240px 240px 240px;
  grid-template-rows: 150px 150px 150px 150px;
  grid-auto-columns: 240px;
  grid-auto-rows: 150px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  align-content: center;
}
</style>
