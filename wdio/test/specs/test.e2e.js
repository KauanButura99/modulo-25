import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'

describe('Home Page', () => {

    it('should access home page', async () => {
      await homePage.open()
      expect(await homePage.title).toBe("EBAC – Shop – Página de teste")
    })
})

