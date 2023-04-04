import { attachWrapper } from "@42px/effector-extra"
import { Method, authRequestFx } from "../request"
import {
    SetRespondentVacancyPayload,
    SortCardFxPayload,
    UploadRespondentCvFxPayload,
    UpdateRespondentFxPayload
} from "./types"
import { Respondent } from "../interfaces"


export const sortCardFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: SortCardFxPayload) => ({
        url: '/respondents/order',
        method: Method.patch,
        body: {
            orderItems: body
        }
    }),
    mapResult: ({ result }) => result.data as void
})


export const setRespondentVacancyFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: SetRespondentVacancyPayload) => ({
        url: `/respondents/${body.id}`,
        method: Method.patch,
        body: {
            vacancyId: body.vacancyId
        }
    }),
    mapResult: ({ result }) => result.data as void
})



export const createRespondentFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (p: number | void) => ({
        url: `/respondents`,
        method: Method.post,
        body: {
            title: 'Новый респондент',
            description: '',
            vacancyId: p,
        }
    }),
    mapResult: () => ({}),
})


export const fetchSingleRespondentFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/respondents/${id}`,
        method: Method.get,
    }),
    mapResult: ({ result }) => result.data as Respondent,
})

export const fetchTimetableFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: `/respondents/timetable`,
        method: Method.get,
    }),
    mapResult: ({ result }) => result.data as Respondent[],
})


export const updateRespondentFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateRespondentFxPayload) => ({
        url: `/respondents/${body.id}`,
        method: Method.patch,
        body
    }),
    mapResult: ({ result }) => result.data as string,
})


export const deleteRespondentFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: string | number) => ({
        url: `/respondents/${id}`,
        method: Method.delete,
    }),
    mapResult: ({ result }) => result.data as string,
})


export const uploadRespondentCvFx = attachWrapper({
    effect: authRequestFx,
    mapParams: ({ file, respondentId }: UploadRespondentCvFxPayload) => {
        const body = new FormData()
        body.append('file', file)
        return ({
            url: `/respondents/uploadCv/${respondentId}`,
            method: Method.post,
            body
        })
    },
    mapResult: () => ({})
})
