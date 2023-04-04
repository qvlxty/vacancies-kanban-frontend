import { createDomain } from 'effector'
import {Notification} from './types'

const d = createDomain()

export const $notifications = d.store<Notification[]>([])
export const popNotification = d.event()