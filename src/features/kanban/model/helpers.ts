import { KanbanColumn } from "@/dal/interfaces"

export const getSortCardColumn = (columns: KanbanColumn[], {
    id, index
}: { id: number, index: number }
) => {

    /*
        Найдём колонку с целевым элементом
        и сразу исключим его
    */
    const foundColumn = columns.find(
        ({ respondents }) => respondents.some(
            (respondent) => respondent.id === id
        )
    )?.respondents.filter((p) => p.id !== id) || []

    /*
     Сформируем новую колонку на основе этой
     */
    let newColumns = [
        ...foundColumn.slice(
            0, index
        ), {
            id
        },
        ...foundColumn.slice(
            index,
        )
    ]

    return newColumns.map(({ id }, order) => ({
        id, order
    }))

}