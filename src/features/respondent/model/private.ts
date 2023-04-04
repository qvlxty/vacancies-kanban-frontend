import { fetchSingleRespondentFx } from "@/dal";
import { d } from "./domain";

export const $respondentId = d.store<string | null>(null)
export const resetState = d.event()

export const $modalVisible = d.store(false)
export const closeModal = d.event()

export const uploadRespondentCv = d.event()

export const $loading = fetchSingleRespondentFx.pending