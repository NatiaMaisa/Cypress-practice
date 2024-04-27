describe('random test cases', ()=>{

        it(' Register User',()=>{

        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#accountFrm > fieldset > .btn').click();
        let name = "Natia"
        cy.get('#AccountFrm_firstname').type(name);
        let email = "natiamaisa" + Math.random() + "@gmail.com"
        cy.get('#AccountFrm_email').type(email);
        cy.get('#AccountFrm_telephone').type("598222222");
        cy.get('#AccountFrm_company').type("Smart Academy");
        cy.get('#AccountFrm_address_1').type("Ilia Chavchavadze str. 29");
        cy.get('#AccountFrm_city').type("Tbilisi");
        cy.get('#AccountFrm_country_id').select('Georgia');
        cy.get('#AccountFrm_loginname').type(name);
        let password = "Natia123"
        cy.get('#AccountFrm_password').type(password);
        cy.get('#AccountFrm_confirm').type(password);
        cy.get('#AccountFrm_newsletter0').check();
        cy.get('.col-md-2 > .btn').click();
        cy.get('.alert').should('be.visible');


        cy.get('#customer_menu_top > li > a').click();
        cy.get('#accountFrm > fieldset > .btn').click();
        cy.get('#AccountFrm_firstname').type(name);
        let lastname = "Maisuradze"
        cy.get('#AccountFrm_lastname').type(lastname);
        cy.get('#AccountFrm_email').type(email);
        cy.get('#AccountFrm_telephone').type("598222222");
        cy.get('#AccountFrm_company').type("Smart Academy");
        cy.get('#AccountFrm_address_1').type("Ilia Chavchavadze str. 29");
        cy.get('#AccountFrm_city').type("Tbilisi");
        cy.get('#AccountFrm_country_id').select('Georgia');
        cy.get('#AccountFrm_zone_id').select('Tbilisi');
        cy.get('#AccountFrm_postcode').type('123456')
        let loginName = "Natia" + Math.random()
        cy.get('#AccountFrm_loginname').type(loginName);
        cy.get('#AccountFrm_password').type(password);
        cy.get('#AccountFrm_confirm').type(password);
        cy.get('#AccountFrm_newsletter0').check();
        cy.get('.col-md-6').find('#AccountFrm_agree').check()
        cy.get('.col-md-2 > .btn').click();
        cy.get('.heading2 > span').should('be.visible');
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('exist');
        cy.get('#topnav > .form-control').select('Specials');
        cy.get('.maintext').should('exist');
        cy.url().should('include', 'product/special');
    

        })
    
        })