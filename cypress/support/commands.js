Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Patricia')
    cy.get('#lastName').type('Siqueira')
    cy.get('#email').type('patriciafs1@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click() 
})