import { fromProvinceToRegion } from '../src'

test('Milano caput mundi', () => {
  expect(fromProvinceToRegion('MI')).toBe('Lombardia')
})
