import { decorate, observable, action, computed } from 'mobx'
import seeds from './seeds'

const AppStore = observable.object({
  data: seeds
})

export default AppStore
