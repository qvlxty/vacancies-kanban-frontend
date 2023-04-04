import axiosLib from 'axios'
import {
  authRequestFx,
  requestFx,
} from './units'
import { sample } from 'effector'
import { clearAccessToken } from '../auth'
import { showNotification } from '@/ui/notifications'

const axios = axiosLib.create({
  baseURL: process.env.API_PREFIX,
  withCredentials: true
})

sample({
  clock: requestFx.fail,
  filter: (p) => p.error.status === 401,
  target: clearAccessToken
})

axios.interceptors.response.use(undefined, (error) => {
  throw error
})

sample({
  clock: authRequestFx.doneData,
  filter: (p) => typeof p.data === 'string',
  fn: (p) => ({
    message: p.data,
  }),
  target: showNotification
})

requestFx.use((params) => {
  const defaultHeaders = params.headers || {}
  const headers = {
    ...defaultHeaders,
  }

  if (params.accessToken) {
    headers['Authorization'] = params.accessToken
  }

  return axios.request({
    headers,
    method: params.method,
    url: params.url,
    params: params.query,
    data: params.body,
    baseURL: params.baseUrl,
  })
})
