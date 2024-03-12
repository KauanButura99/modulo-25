import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'

describe('My Login application', () => {
    
    it('should access home page', async () => {
        await homePage.open()
        expect(await homePage.title).toBe("EBAC – Shop – Página de teste")
      })  
   
})

