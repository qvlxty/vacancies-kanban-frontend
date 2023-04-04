
export type SetRespondentVacancyPayload = {
    vacancyId: number | null,
    id: number
}

export type SortCardFxPayload = {
    id: number,
    order: number,
}[]


export type UpdateRespondentFxPayload = {
    id: string,
    title: string,
    description: string,
    status?: string,
    interviewDate?: string | null,
    additionalMessages?: string,
    essay?: string,
    feedback?: string,
}

export type UpdateVacancyFxPayload = {
    id: string,
    title: string,
    description: string,
    isOpen?: boolean,
    stack?: string,
}

export type UploadRespondentCvFxPayload = {
    file: File,
    respondentId: string
}


export type RegisterFxPayload = {
    login: string
    password: string
    fio: string
}