import { createApp } from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import './index.css'
import router from './router'
import { store } from './store'
import _ from 'lodash'

// vue.use(firestorePlugin)
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
const app = createApp(App)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = _.upperFirst(
    _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(firestorePlugin).use(store).use(router).mount('#app')
