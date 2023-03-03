import { socketStore } from '@store/index'
import {
    send as sendFromSocketIO,
    socketConnect as socketConnectFromSocketIO,
    socketDisconnect as socketDisconnectFromSocketIO
} from './socketIO'
import {
    send as sendFromWebsocket,
    socketConnect as socketConnectFromWebsocket,
    socketDisconnect as socketDisconnectFromWebsocket
} from './websocket'

export const socketConnect = (url: string) => {
    return socketStore.isSocketIO ? socketConnectFromSocketIO(url) : socketConnectFromWebsocket(url)
}

export const socketDisconnect = () => {
    return socketStore.isSocketIO ? socketDisconnectFromSocketIO() : socketDisconnectFromWebsocket()
}

export const send = (event: string, data: any) => {
    return socketStore.isSocketIO ? sendFromSocketIO(event, data) : sendFromWebsocket(event, data)
}
