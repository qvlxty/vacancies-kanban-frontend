import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'
import { useStoreMap } from 'effector-react'

import DatePicker from 'react-datepicker'
import { $users } from '@/features/users/model'
import { Button, Dropdown, Icon, Input } from '@/ui'

import { respondentForm } from '../../model/forms'
import { deleteRespondent } from '../../model'
import "react-datepicker/dist/react-datepicker.css";
import { ru } from 'date-fns/locale'



export const RespondentForm = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const users = useStoreMap({
        store: $users,
        keys: [],
        fn: (u) => u.map((item) => ({ value: item.id, text: item.fio }))
    })
    const userId = useField(respondentForm.fields.userId)
    const title = useField(respondentForm.fields.title)
    const status = useField(respondentForm.fields.status)
    const interviewDate = useField(respondentForm.fields.interviewDate)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        respondentForm.submit()
    }, [])

    const deleteHandler = React.useCallback(() => {
        if (confirm('Вы уверены, что хотите удалить Респондента?')) {
            deleteRespondent()
        }
    }, [])

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [])


    return (
        <Container onSubmit={handleSubmit}>
            <label>ФИО Респондента</label>
            <Input
                ref={inputRef}
                value={title.value}
                onChange={title.set}
                hasError={title.hasError()}
                errorText={title.errorText()}
            />
            <label>Рекрутёр </label>
            <Dropdown
                placeholder='Ответственный'
                options={users}
                selected={userId.value}
                onOptionChange={userId.onChange}
            />
            <label>Статус</label>
            <Dropdown
                options={[
                    { value: 'cancelled', text: 'Отменён' },
                    { value: 'ongoing', text: 'Не обработан' },
                    { value: 'failed', text: 'Не прошел' },
                    { value: 'success', text: 'Прошел' },
                ]}
                selected={status.value}
                onOptionChange={status.onChange}
            />
            <label>Дата собеседования</label>
            <DatePicker
                selected={interviewDate.value}
                onChange={interviewDate.set}
                showTimeSelect
                locale={ru}
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="d MMMM yyyy HH:mm"
            />

            <ActionButtons>
                <Button haveIcon danger onClick={() => deleteHandler()}>
                    <Icon icon={'delete'} />
                    Удалить
                </Button>
            </ActionButtons>
        </Container>
    )
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 12px;
    box-sizing: border-box;
`


const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-end;
    & > button {
        flex: 1;
    }
`