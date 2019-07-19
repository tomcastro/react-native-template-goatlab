import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { DEV_SERVER_IP } from 'react-native-dotenv'

Reactotron.configure({ host: DEV_SERVER_IP }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(asyncStorage())
  .connect() // let's connect!

Reactotron.clear()

console.tron = Reactotron
