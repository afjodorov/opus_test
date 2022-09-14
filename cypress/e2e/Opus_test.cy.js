import {GooglePage} from '../pages/googlePage';

describe('test task', () => {
  const googlePage = new GooglePage();
  it('can close T&C modal', () => {
    cy.visit('https://www.google.com/')
    googlePage.getGoogleTCModal().then($modal => {
      if($modal.is(':visible')){
        googlePage.getGoogleTCAgreeBtn().click()
      }
    })
  })
  it('can google company name', () => {
      const companyName = "Opus online"
      googlePage.getGoogleSearchBar().type(companyName + '{enter}')
  })
  it('can verify company name', () => {
    const companyName = "Opus Online"
    googlePage.getGoogleCompanyName()
      .should('have.text', companyName)
  })
  it('can verify company address', () => {
    const address = "Pärnu mnt 158, 11317 Tallinn"
    googlePage.getGoogleCompanyAddress()
      .should('have.text', address)
  })
  it('can verify company phone number', () => {
    const phoneNum = "682 9670"
    googlePage.getGoogleCompanyPhoneNum()
      .should('have.text', phoneNum)
  })
  it('can verify navigate to website button', () => {
    const websiteUrl = "https://opusonline.co/"
    googlePage.getNavigateToWebsiteBtn()
      .invoke('attr', 'href')
      .should('contain', websiteUrl)
  })
})
