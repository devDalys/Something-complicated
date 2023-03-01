import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import './PageLoader.scss'
import { Loader } from 'shared/ui/Loader'
interface PageLoaderProps {
  className?: string

}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
      <div className={cn('PageLoader', {}, [className])}>
          <Loader />
      </div>
  )
}
