export { default as Logo } from '../../components/Logo.vue'
export { default as Exp } from '../../components/exp.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyExp = import('../../components/exp.vue' /* webpackChunkName: "components/exp" */).then(c => c.default || c)
