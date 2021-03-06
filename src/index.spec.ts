import { isBoolean } from './index'

describe('isBoolean', () => {
  test('should return true if the given value is an instance of Boolean', () => {
    expect(isBoolean(new Boolean())).toEqual(true)
  })

  test('should return true if the given value is the literal `true`', () => {
    expect(isBoolean(true)).toEqual(true)
  })

  test('should return true if the given value is the literal `false`', () => {
    expect(isBoolean(false)).toEqual(true)
  })

  test('should return false if the given value is any non-boolean value', () => {
    expect(isBoolean('')).toEqual(false)
    expect(isBoolean(undefined)).toEqual(false)
    expect(isBoolean(null)).toEqual(false)
    expect(isBoolean(123)).toEqual(false)
  })
})
