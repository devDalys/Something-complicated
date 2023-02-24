import React from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
interface SidebarProps {
  className?: string

}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
      <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <button onClick={onToggle}>TOGGLE</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang}/>
          </div>
      </div>
  )
}
