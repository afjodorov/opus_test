export class GooglePage {

  getGoogleTCModal(){
    return cy.get("#CXQnmb")
  }

  getGoogleTCAgreeBtn(){
    return cy.get('#L2AGLb')
  }

  getGoogleSearchBar(){
    return cy.get('.gLFyf.gsfi')
  }

  getGoogleCompanyName(){
    return cy.get('[data-local-attribute=d3bn]')
  }

  getGoogleCompanyAddress(){
    return cy.get('[data-local-attribute=d3adr]')
      .children('.LrzXr')
  }

  getGoogleCompanyPhoneNum(){
    return cy.get('[data-local-attribute=d3ph]')
      .children('span')
      .children('span')
      .not('.LrzXr.zdqRlf.kno-fv')
  }

  getNavigateToWebsiteBtn(){
    return cy.get('.ab_button')
  }
  
}
