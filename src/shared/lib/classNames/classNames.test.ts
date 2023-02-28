import { cn } from './classNames'

describe('classNames', () => {
  test('test', () => {
    expect(cn('someClass')).toBe('someClass')
  })

  test('additional classNames', () => {
    expect(cn('someClass', {}, ['secondClass'])).toBe('someClass secondClass')
  })
})
