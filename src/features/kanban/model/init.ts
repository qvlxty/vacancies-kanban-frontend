import { sample } from "effector";
import {
    $kanbanColumns,
    fetchKanban,
    setRespondentVacancy,
    sortCard,
} from "./private";
import { getSortCardColumn } from "./helpers";
import { onCreateVacancy, onVacancyEditDone } from "@/features/vacancy/model";
import { onCreateRespondent, onDeleteRespondent, onRespondentEditDone } from "@/features/respondent/model";
import { fetchKanbanFx, setRespondentVacancyFx, sortCardFx } from "@/dal";

$kanbanColumns
    .on(fetchKanbanFx.doneData, (_, [columns, emptyRespondents]) => {
        return [
            ...columns,
            {
                id: -1,
                title: 'Пул респондентов',
                respondents: emptyRespondents,
                isOpen: true,
                stack: ''
            }
        ]
    })



sample({
    clock: [
        fetchKanban,
        setRespondentVacancyFx.done,
        sortCardFx.done,
        onCreateRespondent,
        onCreateVacancy,
        onVacancyEditDone,
        onRespondentEditDone,
        onDeleteRespondent
    ],
    target: fetchKanbanFx
})

sample({
    clock: setRespondentVacancy,
    target: setRespondentVacancyFx,
})

sample({
    clock: sortCard,
    source: $kanbanColumns,
    fn: getSortCardColumn,
    target: sortCardFx,
})
