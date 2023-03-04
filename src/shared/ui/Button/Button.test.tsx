import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

describe('button tests', () => {
  it('button is rendered', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    const button = screen.getByText('test');
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('clear')
  })
})
