import { attach, createDomain } from 'effector'
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import { $accessToken } from '../auth'

export enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  patch = 'PATCH'
}

type Request = {
  method: AxiosRequestConfig['method']
  url: AxiosRequestConfig['url']
  headers?: AxiosRequestConfig['headers']
  accessToken?: string
  query?: AxiosRequestConfig['params']
  body?: AxiosRequestConfig['data']
  baseUrl?: AxiosRequestConfig['baseURL']
  responseType?: AxiosRequestConfig['responseType']
  withCredentials?: AxiosRequestConfig['withCredentials']

}

export type AccessToken = string | null

export const restApi = createDomain('rest-api')

export const requestFx = restApi.effect<Request, AxiosResponse<any>, AxiosError>()
export const authRequestFx = attach({
  source: $accessToken,
  effect: requestFx,
  mapParams: (request: Omit<Request, 'accessToken'>, accessToken) => ({
    ...request,
    accessToken: accessToken || undefined,
  }),
})
