import { ThemeItem } from '../model/types'

const BASE_FONT = 'Roboto Regular'
const LIGHT_FONT = 'Roboto light'

export const mainTheme = {
  backgroundColor: '#FAFAFA',
  contentBg: '#fff',
  fontColor: '#080111',
  baseFont: BASE_FONT,
  baseFontLight: LIGHT_FONT,


  accent700: '#ff3399',
  accent600: '#ff0080',
  accent500: '#db006e',
  accent400: '#b30059',
  accent300: '#800040',

  default800: '#eff3f5',
  default700: '#dfe6ec',
  default600: '#c0cdd8',
  default500: '#a3b7c7',
  default400: '#90a8bb',
  default300: '#718fa8',


  blue500: '#1E90FF',
  green500: '#6FCF97',

  secondary700: '#eff4ff',
  secondary600: '#fff',

  error: '#F53333',
}
export const createDefaultTheme = (): ThemeItem => ({
  name: 'main',
  variables: mainTheme,
})
