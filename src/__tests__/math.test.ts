import { addStrNum } from '../math'

describe('add', () => {
  test('[12, NaN]', () => {
    expect(() => addStrNum(['12', 'NaN'])).toThrow()
  })

  test('[1]', () => {
    expect(addStrNum(['1'])).toBe(1)
  })

  test('[1, 3, 5]', () => {
    expect(addStrNum(['1', '3', '5'])).toBe(9)
  })
})
