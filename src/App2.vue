<template>
  <div id="app">

<mt-header title="long long long long title">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>

<mt-button type="default" class="width100">default</mt-button>
<mt-button type="primary" class="width100">primary</mt-button>
<mt-button type="danger" class="width100">danger</mt-button>

<mt-cell
  title="タイトル"
  to="//github.com"
  is-link
  value="タイトル">
</mt-cell>

    <mt-palette-button content="+">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
    </mt-palette-button>

<mt-index-list>
  <mt-index-section index="1">
    <mt-cell title="Aaron"></mt-cell>
    <mt-cell title="Alden"></mt-cell>
    <mt-cell title="Austin"></mt-cell>
  </mt-index-section>
  <mt-index-section index="2">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>
  <mt-index-section index="3">
    <mt-cell title="Zack"></mt-cell>
    <mt-cell title="Zane"></mt-cell>
  </mt-index-section>
</mt-index-list>

<div class="panel">
  <a class="panel-block is-active">
   <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
   <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
   <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
   <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    minireset.css
  </a>
</div>

    <div class="logo">
      <img src="./assets/vuejs.png">
      <span>+</span>
      <img src="./assets/cordova.png">
    </div>

    <div v-if="!cordova" class="alert">
      There might be an error with your installation. Check that <strong>Vue.cordova</strong> is available
    </div>

    <div v-if="cordova && !cordova.deviceready" class="alert">
      The `deviceready` event has not been triggered.
      <br />
      Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>

    <div class="indicators">
      <div :class="{ ok: cordova.deviceready }">
        <span></span>deviceready
      </div>
      <div v-for="(pluginTest, plugin) in plugins" :class="{ ok: pluginEnabled(plugin) }" @click="pluginTest">
        <span></span>{{ plugin }}
      </div>
      <p>
        Click a plugin name to run a simple test
      </p>
    </div>

    <h2>`Vue.cordova`</h2>

    <div class="dump" v-if="cordova">{{ cordova }}</div>

  </div>
</template>

<script>
import Vue from 'vue'
import log from 'loglevel'

export default {
  name: 'app2',
  components: {
    log
  },
  methods: {
    init () {
      log.debug('// init')
    },
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    }
  },
  created: function () {
    log.setLevel(0)
    log.debug('//app2: created')
  },
  mounted: function () {
    log.debug('// mounted')
    this.init()
  },
  computed: {
    showSlide: function () {
    }
  },
  data: function () {
    return {
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            log.debug('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
            log.debug('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
            log.debug('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        },
        'cordova-plugin-device': function () {
          if (!Vue.cordova.device) {
            window.alert('FAILED : device information not found')
            log.debug('FAILED : device information not found')
          } else {
            window.alert('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
            log.debug('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
          }
        },
        'cordova-plugin-geolocation': function () {
          if (!Vue.cordova.geolocation) {
            window.alert('Vue.cordova.geolocation not found !')
            log.debug('Vue.cordova.geolocation not found !')
            return
          }
          Vue.cordova.geolocation.getCurrentPosition((position) => {
            window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
            log.debug('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
          }, (error) => {
            window.alert('FAILED Error #' + error.code + ' ' + error.message)
            log.debug('FAILED Error #' + error.code + ' ' + error.message)
          }, {
            timeout: 1000,
            enableHighAccuracy: true
          })
        },
        'cordova-plugin-contacts': function () {
          if (!Vue.cordova.contacts) {
            window.alert('Vue.cordova.contacts not found !')
            log.debug('Vue.cordova.contacts not found !')
            return
          }
          const ContactFindOptions = ContactFindOptions || function () {}
          Vue.cordova.contacts.find(['displayName'], (contacts) => {
            window.alert('Contacts found : ' + contacts.length)
            log.debug('Contacts found : ' + contacts.length)
          }, (error) => {
            window.alert('FAILED : ' + error.code)
            log.debug('FAILED : ' + error.code)
          })
        }
      }
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

#app {
  color: #2c3e50;
  margin: 40px auto;
  max-width: 640px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  padding-bottom: 30px;
}

.logo span {
  position: relative;
  top: -30px;
  font-size: 36px;
  margin: 0 20px;
}

.logo img {
  width: 90px;
  height: 90px;
}

div.dump {
  background: #eee;
  text-align: left;
  border: solid 1px #ccc;
  padding: 20px;
  max-width: 600px;
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre;
}

div.alert {
  color: #c00;
  font-weight: bold;
  font-size: .9em;
  padding-bottom: 30px;
  line-height: 1.6;
}

div.alert a {
  color: inherit;
}

div.indicators {
  width: 340px;
  margin: 0 auto 40px;
  text-align: left;
  font-family: Courier, Courier New, sans-serif;
}
div.indicators div {
  padding-bottom: 15px;
  opacity: .6;
}
div.indicators div.ok {
  opacity: 1;
  cursor: pointer;
}
div.indicators div.ok span {
  background: #0c0;
}
div.indicators div span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c00;
  border-radius: 20px;
  position: relative;
  top: 3px;
  margin-right: 15px;
}
div.indicators p {
  font-size: .8em;
  font-weight: bold;
  padding-bottom: 20px;
}
.width100 {
  width: 100%
}
</style>
