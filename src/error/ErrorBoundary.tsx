import React, { Component } from 'react'

interface Props {
  children?: React.ReactNode
  fallback: string
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('ERROR:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1 className='font-bold text-red-500 text-center py-10'>
          {this.props.fallback}
        </h1>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
