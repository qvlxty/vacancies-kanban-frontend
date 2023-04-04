import React from 'react'
import styled from 'styled-components'
import { themeVar } from './theming'

type Props = {
    checked: boolean
    onChange: (state: any) => void
    disabled?: boolean
}

export const Switch = ({ checked, onChange, disabled }: Props) => (
    <Container>
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
            <span className="slider round"></span>
        </label>
    </Container>
)

const Container = styled.div`
& {
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themeVar('default600')};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: ${themeVar('accent500')};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${themeVar('accent500')};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`