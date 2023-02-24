import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <>
          <Button theme={ThemeButton.CLEAR} className={cn(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
              {theme === Theme.LIGHT ? <ThemeLight/> : <ThemeDark/>}
          </Button>
      </>
  )
}
