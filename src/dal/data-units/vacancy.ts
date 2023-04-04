import { attachWrapper } from "@42px/effector-extra";
import { Method, authRequestFx } from "../request";
import { KanbanColumn, Respondent, Vacancy } from "../interfaces";
import { UpdateVacancyFxPayload } from "./types";

export const fetchKanbanFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        method: Method.get,
        url: '/vacancy/vacancies',
    }),
    mapResult: ({ result }) => result.data as [KanbanColumn[], Respondent[]]
})

export const createVacancyFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        body: {
            title: 'Новая вакансия',
            description: 'Краткое описание',
        },
        url: '/vacancy',
        method: Method.post,
    }),
    mapResult: () => ({})
})
export const updateVacancyFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateVacancyFxPayload) => ({
        body,
        url: `/vacancy/${body.id}`,
        method: Method.patch,
    }),
    mapResult: () => ({})
})

export const deleteVacancyFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/vacancy/${id}`,
        method: Method.delete,
    }),
    mapResult: () => ({})
})

export const fetchSingleVacancyFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/vacancy/${id}`,
        method: Method.get,
    }),
    mapResult: ({ result }) => result.data as Vacancy,
})

