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

export default vue => {
  vue.use(Vuetify, {
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
}
