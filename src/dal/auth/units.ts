import { root } from '@/root-domain'

export const authDomain = root.domain('authDomain')

export const $accessToken = authDomain.store<string | null>(null)

export const setAccessToken = authDomain.event<string | null>()
export const clearAccessToken = authDomain.event<void>()

export const loadAccessTokenFx = authDomain.effect<void, string | null, Error>()
export const saveAccessTokenFx = authDomain.effect<string, void, Error>()
export const clearAccessTokenFx = authDomain.effect<void, void, Error>()