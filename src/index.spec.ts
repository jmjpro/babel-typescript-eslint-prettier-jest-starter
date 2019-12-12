import { testFunc } from './index'

describe('testFunction', () => {
  it('should double the input it receives', () => {
    const input: number = 2
    expect(testFunc(input)).toEqual(4)
  })
})
