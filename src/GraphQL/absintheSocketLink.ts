import * as AbsintheSocket from '@absinthe/socket'
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link'
import { Socket as PhoenixSocket } from 'phoenix'
import Config from 'react-native-config'

export default createAbsintheSocketLink(AbsintheSocket.create(
    new PhoenixSocket(Config.WEBSOCKET_API_URL)
))
