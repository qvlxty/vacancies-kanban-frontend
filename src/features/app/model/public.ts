import { d } from "./domain";

export const loadApp = d.event()
export const $isApploaded = d.store(false)

export const pushNavigate = d.event<string>()