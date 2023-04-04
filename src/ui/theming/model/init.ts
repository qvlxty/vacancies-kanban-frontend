import { combine, sample } from 'effector'
import {
  changeTheme,
  registerTheme,
  resetThemingState,
  resetTheme,
  publicTheming,
  $currentTheme,
  toggleTheme,
} from './public'
import {
  $availableThemes,
} from './private'

publicTheming.onCreateStore((store) => store.reset(resetThemingState))

const changeThemeWithThemes = sample({
  source: $availableThemes,
  clock: changeTheme,
  fn: (themes, newThemeName) => ({ themes, newThemeName })
})

$currentTheme.on(
  changeThemeWithThemes,
  (currentTheme, { themes, newThemeName }) => {
    const newTheme = themes.find(({ name }) => name === newThemeName)
    return newTheme || currentTheme
  },
).reset(resetTheme)

$availableThemes.on(registerTheme, (themes, newTheme) => {
  if (!themes.find(({ name }) => name === newTheme.name)) {
    return [...themes, newTheme]
  }
  return themes
})

sample({
  source: combine($availableThemes, $currentTheme),
  clock: toggleTheme,
  fn: ([themes, curTheme]) => {
    if (curTheme.name === 'main') {
      return themes[1]
    }
    return themes[0]
  },
  target: $currentTheme,
})
