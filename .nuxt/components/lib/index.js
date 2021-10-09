import FullPage from './FullPage'

const options = JSON.parse(`{"activeSection":0,"mouseWheelSensitivity":120,"showIndicators":true}`)

export default (app) => {
  app.component('FullPage', {
    extends: FullPage,
    props: {
      _customOptions: {
        type: Object,
        default: () => ({...options})
      }
    }
  })
}
