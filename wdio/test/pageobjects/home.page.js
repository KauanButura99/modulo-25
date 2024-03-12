import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    get title(){
        return browser.getTitle()
    }
    open(){
        return super.open("/")
    }
}

export default new SecurePage();
