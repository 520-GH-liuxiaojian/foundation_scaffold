import { SocketStore as SocketStoreModel } from './index'
import { DATA_FORMAT_TYPE, SOCKET_TYPE } from '@constants/socket'

export as namespace ISocketStore

export interface SocketStore extends SocketStoreModel {}

export import SocketType = SOCKET_TYPE
export import DataFormatType = DATA_FORMAT_TYPE

export interface Message {
    event: string
    time?: number
    from: 'browser' | 'server' | 'console'
    data: any
}
