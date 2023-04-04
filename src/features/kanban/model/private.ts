import { KanbanColumn } from '@/dal/interfaces'
import { d } from './domain'
import { SetRespondentVacancyPayload } from '@/dal/data-units/types'
import { SortCardPayload } from './types'


export const $kanbanColumns = d.store<KanbanColumn[]>([])

export const fetchKanban = d.event()
export const setRespondentVacancy = d.event<SetRespondentVacancyPayload>()
export const sortCard = d.event<SortCardPayload>()

