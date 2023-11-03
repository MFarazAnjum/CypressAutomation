import LoginPage from 'C:/Users/Faraz Anjum/IdeaProjects/CypressAutomation/cypress/support/KualiteePOM.js';

const loginObj = new LoginPage();
describe('delete a role', () => {
    beforeEach(() => {
        cy.fixture('credentials').then((credentials) => {
            loginObj.visit(credentials.url);
            loginObj.enter_username(credentials.username);
            loginObj.enter_password(credentials.password);
        });
        loginObj.click_login();
        cy.wait(5000)
        loginObj.click_settings();

    })
    it('Check Manage Role Page is Open or Not', () => {
        cy.get('.breadcrumbs').contains("Manage Roles");

    })
    it('Check Edit Role Page is Open or Not', () => {
        loginObj.click_edit();
        cy.wait(5000);
        cy.get('.breadcrumbs').contains("Edit Role");
    })
    it('check the checkbox of delete button and move to manage role page', () => {
        loginObj.click_edit();
        loginObj.click_checkbox();
        cy.wait(5000);
        cy.get('.breadcrumbs').contains("Edit Role");
    })
    it(' click and update and Move to manage role page', () => {
        loginObj.click_edit();
        loginObj.click_checkbox();
        loginObj.click_update();
        cy.wait(5000);
        cy.get('.breadcrumbs').contains("Manage Role");
    })
})
