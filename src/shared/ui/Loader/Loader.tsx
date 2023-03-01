import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import './Loader.scss'
interface LoaderProps {
  className?: string

}

export const Loader = ({ className }: LoaderProps) => {
  return (
      <div className={cn('Loader', {}, [className])}>
          <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}
