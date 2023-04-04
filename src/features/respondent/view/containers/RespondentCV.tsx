import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'

import { respondentForm } from '../../model/forms'

import { Button, Dragger, MdEditor } from '@/ui'
import { uploadRespondentCv } from '../../model/private'


export const RespondentCV = () => {
    const file = useField(respondentForm.fields.file)
    const resumeUrl = useField(respondentForm.fields.resumeUrl)
    const additionalMessages = useField(respondentForm.fields.additionalMessages)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        uploadRespondentCv()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            {resumeUrl.value !== null && (<iframe src={`/api/files/${resumeUrl.value}`} />)}

            <Dragger
                onFiles={file.onChange}
            />
            {file.value
                ? <>Выбран: {file.value.name}</>
                : <>Файл не выбран</>
            }
            <Button
            >
                Загрузить CV
            </Button>
            <MdEditor
                value={additionalMessages.value}
                onChange={additionalMessages.set}
            />
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
    box-sizing: border-box;
`
