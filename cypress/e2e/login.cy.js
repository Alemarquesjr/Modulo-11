/// <reference types="cypress" /> 

context('Funcionalidade login' , () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () => {
        
        cy.get('#username') . type('marquesjunioralexandre@gmail.com')
        cy.get('#password') . type('rgm23281')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.page-title') .should('contain' , 'Minha conta')
    })

    it('deve exibir uma mensagem de erro ao inseir usuario invalido' , () =>{
     
        cy.get('#username') . type('teste@gmail.com')
        cy.get('#password') . type('teste123')
        cy.get('.woocommerce-form > .button') .click()
        
    })

    it('deve exibir uma mensagem de erro ao inseir senha invalida' , () =>{
      
        cy.get('#username') . type('marquesjunioralexandre@gmail.com')
        cy.get('#password') . type('teste123')
        cy.get('.woocommerce-form > .button') .click()
        cy.get('.woocommerce-error > li').should('contain', 'senha fornecida')
        
    })
    
})