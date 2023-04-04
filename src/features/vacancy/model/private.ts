import { fetchSingleVacancyFx } from "@/dal";
import { d } from "./domain";


export const $vacancyId = d.store<string | null>(null)
export const resetState = d.event()

export const $modalVisible = d.store(false)
export const closeModal = d.event()


export const deleteVacancy = d.event()
export const $loading = fetchSingleVacancyFx.pending