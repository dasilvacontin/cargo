/* globals describe, it */
import expect from 'unexpected'
import { loadGoods } from '../src/lib'

describe('loadGoods', () => {
  it('load goods into their position', () => {
    let truck = loadGoods('$2 there $1', ['yo', 'hi'])
    expect(truck, 'to be', 'hi there yo')

    truck = loadGoods('npm version $1 -m "Release v%s"', ['patch'])
    expect(truck, 'to be', 'npm version patch -m "Release v%s"')
  })

  it('should leave containers empty where goods were not provided', () => {
    let truck = loadGoods('mocha $1 test/acceptance', [])
    expect(truck, 'to be', 'mocha  test/acceptance')
  })
})
