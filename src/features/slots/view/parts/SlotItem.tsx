import React from 'react'
import styled, { css } from 'styled-components'

import { themeVar } from '@/ui/theming'
import { toNormalDateFull } from '@/lib/dates'
import { RespondentStatus } from '@/dal/interfaces'
import { RespondentBadge } from '@/ui'

type Props = {
    id: number,
    title: string,
    date: string,
    vacancyName: string,
    status: RespondentStatus
    onClick: () => void
}

export const SlotItem: React.FC<Props> = (
    { id, title, date, vacancyName, onClick, status }
) => {
    return (
        <TableRowsWrapper
            onClick={onClick}
            key={id}
        >
            <ColWrapper width={'64px'} center style={{ marginLeft: '16px' }} >
                {id}
            </ColWrapper>
            <ColWrapper style={{ width: '200px', }} >
                <LoginWrapper>
                    {title}
                </LoginWrapper>
            </ColWrapper>
            <ColWrapper style={{ width: '200px', }} >
                <LoginWrapper>
                    {toNormalDateFull(date)}
                </LoginWrapper>
            </ColWrapper>
            <ColWrapper >
                {vacancyName}
            </ColWrapper>
            <ColWrapper style={{ justifyContent: 'flex-end', paddingRight: 16 }}>
                <RespondentBadge
                    status={status}
                />
            </ColWrapper>
        </TableRowsWrapper>
    )
}


const LoginWrapper = styled.div`
    margin-left: 12px;
    text-align: left;
    justify-content: start;
    font-weight: 500;
`

const TableRowsWrapper = styled.div`
    text-decoration: none;
    color: ${themeVar('fontColor')};
    border: 1px solid ${themeVar('default500')};
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 16px;

    &:nth-child(even) {
        background-color: ${themeVar('backgroundColor')};
    }
    &:hover {
        background-color: ${themeVar('default700')};
        cursor: pointer;
    }
`

type ColWrapperProps = {
    hideMobile?: boolean
    width?: string
    center?: boolean
}
const ColWrapper = styled.div<ColWrapperProps>`
    flex-direction: row;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    
    justify-content: center;
    ${({ hideMobile }) => hideMobile && css`
        @media only screen and (max-width: 600px) {
            display: none;
        }
    `}
    ${({ width }) => width && css`
        width: ${width};
        max-width: ${width};
    `}
`
