import R from 'ramda'
import Immutable from 'seamless-immutable'

const isImmutable = R.has('asMutable')

const convertToJs = (state: Object) => state.asMutable({deep: true})

const fromImmutable = R.when(isImmutable, convertToJs)

const toImmutable = (raw: Object) => Immutable(raw)

export default {
  out: (state: Object) => {
    state.mergeDeep = R.identity
    return toImmutable(state)
  },
  in: (raw: Object) => {
    return fromImmutable(raw)
  }
}