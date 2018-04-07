import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VAvatar,
  VFooter,
  VBtn,
  VCard,
  VDivider,
  VGrid,
  VSubheader,
  VToolbar,
  transitions
} from 'vuetify'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VFooter,
    VBtn,
    VCard,
    VDivider,
    VGrid,
    VSubheader,
    VToolbar,
    transitions
  }
})
