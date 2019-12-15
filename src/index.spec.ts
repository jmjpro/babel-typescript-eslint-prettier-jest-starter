import { doubler } from './index'

describe('testFunction', () => {
  it('should double the input it receives', () => {
    const input: number = 2
    expect(doubler(input)).toEqual(4)
  })
})
