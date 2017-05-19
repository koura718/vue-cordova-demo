<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
import log from 'loglevel'

export default {
  name: 'app',
  components: {
    log
  },
  methods: {
    init () {
      log.debug('// init')
    }
  },
  created: function () {
    log.setLevel(5)
    log.debug('// created')
  },
  mounted: function () {
    log.debug('// mounted')
    this.init()
  },
  data: function () {
    return {
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}
</style>
