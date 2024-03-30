describe('automationexercise test cases', ()=>{

    it(' Register User',()=>{
    
    cy.visit('http://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4)>a').click();
    cy.get('.signup-form > h2').should('have.text','New User Signup!');
    cy.get('[data-qa="signup-name"]').type('Natia');
    cy.get('[data-qa="signup-email"]').type("natiamaisa5@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('have.text','Enter Account Information');
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('natia123');
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('March');
    cy.get('[data-qa="years"]').select('1992');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Natia');
    cy.get('[data-qa="last_name"]').type('Maisuradze');
    cy.get('[data-qa="company"]').type('Smart Academy');
    cy.get('[data-qa="address"]').type('Ilia Chavchavadze 29');
    cy.get('[data-qa="address2"]').type('Petre Bagrationi 1');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('California');
    cy.get('[data-qa="zipcode"]').type('123456');
    cy.get('[data-qa="mobile_number"]').type('123456789');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("have.text","Account Created!");
    cy.get('[data-qa="account-created"]').contains("Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();


    })

    })
