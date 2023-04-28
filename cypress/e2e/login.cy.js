/// <reference types="cypress" /> 
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login' , () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
  
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

    it('Deve fazer login com sucesso - Usando fixture',() => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username') . type(dados.usuario)
            cy.get('#password') . type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button') .click()
    
            cy.get('.page-title') .should('contain' , 'Minha conta')
            
        })


    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username') . type(perfil.usuario)
        cy.get('#password') . type(perfil.senha, {log: false})
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