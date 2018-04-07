<template>
  <div class="project-card">
    <v-subheader class="subheader">{{title}}</v-subheader>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.project-card {
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: rgba(250, 250, 250, 0.2);
  }
}
</style>