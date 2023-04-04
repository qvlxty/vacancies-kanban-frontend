import React from 'react'
import styled from 'styled-components'
import { useField } from 'effector-forms'

import { Button, Input } from '@/ui'
import { loginForm } from '../../model/forms'

export const LoginForm = () => {
    const loginField = useField(loginForm.fields.login)
    const passwordField = useField(loginForm.fields.password)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginForm.submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                value={loginField.value}
                onChange={loginField.set}
                hasError={loginField.hasError()}
                errorText={loginField.errorText()}
            />
            <Input
                value={passwordField.value}
                onChange={passwordField.set}
                hasError={passwordField.hasError()}
                errorText={passwordField.errorText()}
            />
            <Button type='submit'>
                Войти
            </Button>
        </Container>
    )
}


const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border: 1px solid #ccc;
    max-width: 360px;
    width: 100%;
`