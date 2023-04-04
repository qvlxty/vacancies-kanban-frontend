import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'

import { vacancyForm } from '../../model/forms'
import { Button, Dragger, Input, MdEditor } from '@/ui'
import { deleteVacancy } from '../../model/private'
import { Switch } from '@/ui/Switch'


export const VacancyForm = () => {
    const title = useField(vacancyForm.fields.title)
    const description = useField(vacancyForm.fields.description)
    const stack = useField(vacancyForm.fields.stack)
    const isOpen = useField(vacancyForm.fields.isOpen)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        vacancyForm.submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm('Вы уверены, что хотите удалить Вакансию? Все приклеенные респонденты перейдут в общий пул ')) {
            deleteVacancy()
        }
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                value={title.value}
                onChange={title.set}
                hasError={title.hasError()}
                errorText={title.errorText()}
            />
            <MdEditor
                value={description.value}
                onChange={description.set}
            />
            Стэк:
            <Input
                value={stack.value}
                onChange={stack.set}
                hasError={stack.hasError()}
                errorText={stack.errorText()}
            />
            <FieldWrapper>
                Открыта:
                <Switch checked={isOpen.value} onChange={() => isOpen.set(!isOpen.value)} />
            </FieldWrapper>
            <Button type='submit'>
                Сохранить
            </Button>
            <Button danger onClick={() => deleteHandler()}>
                Удалить
            </Button>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`