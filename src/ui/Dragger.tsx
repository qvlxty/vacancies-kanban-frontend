import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Icon } from './Icon'
import { themeVar } from './theming'

type Props = {
  onFiles: (files: any) => void
  placeholder?: string
}
export const Dragger: React.FC<Props> = ({ onFiles, placeholder = 'Перетащите файлы сюда' }) => {
  const onDrop = React.useCallback((files) => {
    onFiles(files[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1 })
  return (
    <Wrapper {...getRootProps()}>
      <Input {...getInputProps()} />
      {!isDragActive
        ? <><Icon icon={'upload'} />{placeholder}</>
        : <h3>Отпустите файлы для начала загрузки</h3>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px dashed ${themeVar('default600')};
  color: ${themeVar('fontColor')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  :hover {
    border: 1px dashed ${themeVar('fontColor')};
  }
  svg {
    margin-right: 8px;
    font-size: 24px;
  }
`

const Input = styled.input`
  display:none;
`