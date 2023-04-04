import { openRespondentEdit } from '@/features/respondent/model'
import { Button, Icon, RespondentBadge } from '@/ui'
import { themeVar } from '@/ui/theming'
import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled, { css } from 'styled-components'

import { RESPONDENT_ITEM } from '../../model/const'
import { sortCard } from '../../model/private'
import { RespondentStatus } from '@/dal/interfaces'
import { toNormalDateFull } from '@/lib/dates'


type Props = {
    id: number,
    index: number,
    name: string,
    status: RespondentStatus
    interviewDate: string,
    resumeUrl: string | null,
    user?: {
        id: number,
        fio: string
    }
}

export const RespondentItem = ({ name, id, index, status, resumeUrl, user, interviewDate }: Props) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [collected, drag, dragPreview] = useDrag<{ id: number }, unknown, { isDragging: boolean }>(() => ({
        type: RESPONDENT_ITEM,
        item: { id }
    }))
    const [_, drop] = useDrop<{ index: number, id: number }>({
        accept: RESPONDENT_ITEM,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        drop(item, monitor) {
            if (!ref.current) {
                return
            }
            sortCard({
                id: item.id,
                index,
            })
        },
    }, [index])

    drag(drop(ref))
    return (
        <Container
            ref={ref}
            isDragged={collected.isDragging}
        >
            <Header>
                <TitleWrapper>
                    {name}
                </TitleWrapper>
                <Button onClick={() => openRespondentEdit(id.toString())}>
                    <Icon icon={'edit'} />
                </Button>
            </Header>
            {interviewDate && (
                <ResumeBadge>
                    <Icon icon={'calendar'} />{toNormalDateFull(interviewDate)}
                </ResumeBadge>
            )}
            {user && (
                <ResumeBadge>
                    <Icon icon={'users'} />{user?.fio}
                </ResumeBadge>
            )}
            {!Boolean(resumeUrl) && <ResumeBadge><Icon icon={'doc'} /> Добавьте резюме </ResumeBadge>}
            <RespondentBadge
                status={status}
            />
        </Container>
    )
}

const ResumeBadge = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    svg {
        margin-right: 5px;
    }
    padding: 8px;
    border-radius: 8px;
    background-color: ${themeVar('default700')};
    border: 1px solid ${themeVar('default600')};
    
`

type ContainerProps = {
    isDragged?: boolean
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border: 1px solid ${themeVar('default600')};
    background-color: ${themeVar('contentBg')};
    margin-left: 8px;
    margin-right: 8px;
    ${({ isDragged = true }) => isDragged && css`
        opacity: 0.7;
    `}
    cursor: grab;
`

const TitleWrapper = styled.div`
    flex: 1;
    font-size: 18px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`
