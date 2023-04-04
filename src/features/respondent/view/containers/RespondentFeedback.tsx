import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'
import { respondentForm } from '../../model/forms'
import { MdEditor } from '@/ui'


export const RespondentFeedback = () => {
    const description = useField(respondentForm.fields.description)
    const feedback = useField(respondentForm.fields.feedback)
    const essay = useField(respondentForm.fields.essay)

    return (
        <Container>
            <label>Предварительный обзор</label>
            <MdEditor
                value={description.value}
                onChange={description.set}
            />
            <label>Эссе по респонденту</label>
            <MdEditor
                value={essay.value}
                onChange={essay.set}
            />
            <label>Фидбек</label>
            <MdEditor
                value={feedback.value}
                onChange={feedback.set}
            />
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 12px;
    box-sizing: border-box;
`
