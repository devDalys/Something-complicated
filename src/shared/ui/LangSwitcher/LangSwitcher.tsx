import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import i18n from 'i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string

}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button onClick={toggle} theme={ThemeButton.CLEAR} className={cn('', {}, [className])}>
          {t('Перевод')}
      </Button>
  )
}
