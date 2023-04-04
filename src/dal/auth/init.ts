import { forward } from 'effector'
import { AUTH_TOKEN } from './const'
import {
  $accessToken,
  clearAccessToken,
  clearAccessTokenFx,
  loadAccessTokenFx,
  saveAccessTokenFx,
  setAccessToken,
} from './units'

$accessToken
  .on(setAccessToken, (_, value) => value)
  .on(loadAccessTokenFx.doneData, (_, value) => value)
  .on(saveAccessTokenFx, (_, token) => token)
  .reset(clearAccessToken)

forward({
  from: clearAccessToken,
  to: clearAccessTokenFx
})

loadAccessTokenFx.use(() => localStorage.getItem(AUTH_TOKEN))
saveAccessTokenFx.use((token) => localStorage.setItem(AUTH_TOKEN, token))
clearAccessTokenFx.use(() => localStorage.removeItem(AUTH_TOKEN))