import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  isBasic?: boolean
}

export const Loader = ({ isBasic }: Props) => {
  return (
    <LoaderWrapper isBasic={isBasic}>
      <LoaderIcon />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div<Props>`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  ${({ isBasic }) => !isBasic && css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
  `}
`

const LoaderIcon = styled.div`
  border: 4px solid red; /* Light grey */
  border-top: 4px solid red; /* Blue */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`