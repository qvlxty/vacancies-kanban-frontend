import React from 'react'
import styled from 'styled-components'
import { useList, useStore } from 'effector-react'

import { fetchUsers } from '../../model/private'
import { UserListItem } from '../parts'
import { $users } from '../../model/public'


export const UserList = () => {
    const users = useList($users, (item) => (
        <UserListItem
            onDelete={() => ({})}
            {...item}
        />
    ))

    React.useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <Container>
            <h1>Список юзеров</h1>
            {users}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`