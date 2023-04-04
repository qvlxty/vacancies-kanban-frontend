import React from 'react'
import styled from 'styled-components'
import { useList } from 'effector-react'

import { $nearRespondents, getNearRespondents } from '../../model/public'
import { SlotItem } from '../parts'
import { openRespondentEdit } from '@/features/respondent/model'


export const Slots = () => {
    const slots = useList($nearRespondents, (item) => (
        <SlotItem
            status={item.status}
            onClick={() => openRespondentEdit(item.id.toString())}
            vacancyName={item.vacancy.title}
            date={item.interviewDate}
            title={item.title}
            id={item.id}
        />
    ))

    React.useEffect(() => {
        getNearRespondents()
    }, [])

    return (
        <Container>
            <h1>Предстоящие события</h1>
            {slots}
        </Container>
    )
}

const Container = styled.div`
   display: flex;
    flex-direction: column;
    gap: 12px;
`