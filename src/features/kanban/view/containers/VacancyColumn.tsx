import React from 'react'
import styled, { css } from 'styled-components'
import { useDrop } from 'react-dnd'

import { RESPONDENT_ITEM } from '../../model/const'
import { setRespondentVacancy } from '../../model/private'
import { RespondentItem } from './RespondentItem'
import { themeVar } from '@/ui/theming'
import { Button, Icon } from '@/ui'
import { openVacancyEdit } from '@/features/vacancy/model'
import { createRespondent } from '@/features/respondent/model'
import { Respondent } from '@/dal/interfaces'

type Props = {
    id: number
    title: string,
    isOpen: boolean,
    stack: string
    respondents: Respondent[]
}

export const VacancyColumn = ({ title, respondents, id, isOpen, stack }: Props) => {
    const [expanded, setExpanded] = React.useState(isOpen)

    const [{ isOver }, drop] = useDrop<{ id: number }, any, { isOver: boolean }>(() => ({
        accept: RESPONDENT_ITEM,
        collect: (monitor) => ({
            isOver: monitor.isOver()
        }),
        drop: (respondent) => {
            if (id === -1) {
                setRespondentVacancy({
                    vacancyId: null,
                    id: respondent.id
                })
                return
            }
            setRespondentVacancy({
                vacancyId: id,
                id: respondent.id
            })
        }

    }), [id])

    const stackElements = stack?.split(',').filter((el, index) => el !== '' && index < 3)

    return (
        <Container
            expanded={expanded}
            isOver={isOver}
            ref={drop}
        >
            <HeaderWrapper>
                <TitleWrapper onClick={(e) => setExpanded(!expanded)}>
                    <Title>{expanded ? title : '...'}</Title>
                    {expanded && (
                        <BadgesWrapper>
                            {stackElements && stackElements.map((stackItem) => (
                                <StackBadge>{stackItem}</StackBadge>
                            ))}
                        </BadgesWrapper>
                    )}
                </TitleWrapper>
                {expanded && (
                    <>
                        {id !== -1 && (
                            <Button primary onClick={() => openVacancyEdit(id.toString())}>
                                <Icon icon={'edit'} />
                            </Button>
                        )}
                        <Button secondary onClick={() => createRespondent(id === -1 ? undefined : id)}>
                            <Icon icon={'add'} />
                        </Button>
                    </>
                )}
            </HeaderWrapper>
            {expanded && respondents.map((respondent, index) => (
                <RespondentItem
                    index={index}
                    key={respondent.id}
                    id={respondent.id}
                    name={respondent.title}
                    status={respondent.status}
                    resumeUrl={respondent.resumeUrl}
                    user={respondent.user}
                    interviewDate={respondent.interviewDate}
                />
            ))}
        </Container>
    )
}

const BadgesWrapper = styled.div`
    display :flex;
    flex-direction: row;
    flex-wrap: wrap;
`

type ContainerProps = {
    isOver: boolean,
    expanded?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 360px;
    gap: 8px;
    cursor: default;
    border: 1px solid rgba(0,0,0,0);
    ${({ isOver }) => isOver && css`
        border: 1px solid ${themeVar('accent500')};
    `}
    ${({ expanded }) => !expanded && css`
        cursor: pointer;
        width: 64px;
    `}
`

const HeaderWrapper = styled.div`
    background-color:${themeVar('default600')};
    padding: 16px;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    font-weight: 600;
    height: 64px;
    & > * {
        white-space: nowrap;
        overflow: hidden;
    }
`


const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`

const Title = styled.div`
    font-size: 20px;
    &:hover {
        color: ${themeVar('accent700')};
        cursor: pointer;
    }
`

const StackBadge = styled.div`
    display: flex;
    padding: 4px 8px;
    border: 1px solid ${themeVar('default600')};
    background-color: ${themeVar('default300')};
    border-radius: 8px;
    font-size: 16px;
   
`