import React, { ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'
import { PageLoader } from 'shared/ui/PageLoader'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean

}

export class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <Suspense fallback={<PageLoader />}><PageError /></Suspense>
    }

    return children
  }
}
