import { createVacancyFx, updateVacancyFx } from "@/dal";
import { d } from "./domain";

export const openVacancyEdit = d.event<string>()
export const onVacancyEditDone = updateVacancyFx.done
export const onCreateVacancy = createVacancyFx.done
export const createVacancy = d.event()
