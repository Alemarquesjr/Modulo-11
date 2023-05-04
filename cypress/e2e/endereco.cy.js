/// <reference types="cypress" /> 
import enderecoPage from "../support/page-objetcs/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario,dados.senha)
    })

})

    it('Deve fazer cadastro de faturamento com sucesso', () => {
       
        enderecoPage.editarenderecofaturamento('Alexandre', 'Marques', 'ebac', 'Brasil', 'Av São Paulo', '100', 'São Paulo', 'São Paulo', '08790310', '11978342568', 'email@dominio.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
        
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPage.editarenderecofaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
        
    });
});