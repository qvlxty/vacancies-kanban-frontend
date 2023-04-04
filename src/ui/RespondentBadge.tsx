import React from 'react'
import styled, { css } from 'styled-components'
import { RespondentStatus } from '@/dal/interfaces'
import { themeVar } from '@/ui/theming'

type Props = {
    status: RespondentStatus
}
export const RespondentBadge = ({ status }: Props) => {

    return (
        <Container status={status}>
            {status === RespondentStatus.cancelled && <>Отменён</>}
            {status === RespondentStatus.failed && <>Провал</>}
            {status === RespondentStatus.success && <>Успешно прошёл</>}
            {status === RespondentStatus.ongoing && <>Не обработан</>}
        </Container>
    )
}

const Container = styled.div<Props>`
    border-radius: 8px;
    color: #000000;
    background-color: #80809e;
    padding: 8px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ status }) => status === RespondentStatus.cancelled && css`
        background-color: #ffb700;
    `}
    ${({ status }) => status === RespondentStatus.success && css`
        background-color: #1de9a8;
    `}
    ${({ status }) => status === RespondentStatus.failed && css`
        background-color: #c5324a;
    `}

    border: 1px solid ${themeVar('default300')};
`