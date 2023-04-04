export type Vacancy = {
    id: number,
    title: string
    description: string,
    isOpen: boolean,
    stack: string,
    createdDate: string,
    updateDate: string,
}

export type Respondent = {
    id: number,
    title: string
    resumeUrl: string
    status: RespondentStatus
    description: string,
    createdDate: string,
    updateDate: string,
    vacancyId: number,
    interviewDate: string,
    user: User,
    vacancy: Vacancy,
    additionalMessages: string,
    essay: string,
    feedback: string,
}


export enum RespondentStatus {
    cancelled = 'cancelled',
    ongoing = 'ongoing',
    failed = 'failed',
    success = 'success',
}


export type KanbanColumn = {
    id: number,
    title: string,
    isOpen: boolean,
    stack: string,
    respondents: Respondent[]
}

export type User = {
    id: number,
    login: string,
    fio: string,
}