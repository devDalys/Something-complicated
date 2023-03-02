import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
interface PageErrorProps {
  className?: string

}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()
  const reloadPage = () => {
    window.location.reload()
  }

  return (
      <div className={cn(cls.PageError, {}, [className])}>
          <p>{t('Произошла непредвиденная ошибка')}</p>
          <button onClick={reloadPage}>{t('Обновить страницу')}</button>
      </div>
  )
}
