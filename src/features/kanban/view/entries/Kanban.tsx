import { useStore } from 'effector-react'
import React from 'react'
import styled from 'styled-components'

import { $kanbanColumns, fetchKanban } from '../../model/private'
import { VacancyColumn } from '../containers'


export const Kanban = () => {
    const kanbanColumns = useStore($kanbanColumns)
    React.useEffect(() => {
        fetchKanban()
    }, [])

    return (
        <Container>
            {kanbanColumns.map((columnData) => (
                <VacancyColumn
                    key={columnData.id}
                    {...columnData}
                />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`