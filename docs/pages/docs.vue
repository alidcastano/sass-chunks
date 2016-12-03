<template lang="pug">
  section
    router-link(to="/")
      Home page
    layout
</template>

<script>
import layout from '~/documentation/layout.md'

export default {
  head () {
    return {
      title: `Docs (${this.name}-side)`
    }
  },
  components: {
    layout
  }
}
</script>

<style lang="sass" scoped>
.Title
  margin-top: 50px
.Info
  font-weight: 300
  color: #9aabb1
  margin: 0
  margin-top: 10px
a
  margin-top: 50px
</style>
