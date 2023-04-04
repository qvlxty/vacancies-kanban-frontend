import React from 'react'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'

import { $isUserAuthorized } from '@/features/login/model'
import { pushNavigate } from '@/features/app/model'

type Props = {
    isPrivate: boolean
}

export const RouterGuard: React.FC<Props> = ({ isPrivate, children }) => {
    const isUserAuthorized = useStore($isUserAuthorized)
    const history = useHistory()

    React.useEffect(() => {
        if (!isUserAuthorized && isPrivate) {
            history.replace(`/`)
            return
        }
        if (isUserAuthorized && !isPrivate) {
            history.replace(`/kanban`)
        }
    }, [isPrivate, isUserAuthorized])

    React.useEffect(() => {
        const unwatch = pushNavigate.watch((payload) => {
            history.push(payload)
        })
        return () => unwatch()
    }, [])


    return (
        <>{children}</>
    )
}

