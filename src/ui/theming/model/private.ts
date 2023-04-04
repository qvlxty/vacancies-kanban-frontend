import { createDomain } from 'effector'
import { createDarkTheme } from '../themes/dark'
import { createDefaultTheme } from '../themes/main'
import { ThemeItem } from './types'


const privateTheming = createDomain()

export const $availableThemes = privateTheming.store<ThemeItem[]>([
  createDefaultTheme(), createDarkTheme(),
])
