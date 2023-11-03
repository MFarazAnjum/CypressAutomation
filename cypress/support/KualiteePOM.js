import 'cypress-xpath';
class LoginPage{
  constructor() {
    this.elements = {
      username_textbox: () => cy.get("#email_id"),
      password_textbox: () => cy.get("#password"),
      login_button: () => cy.get(".submit-btn"),
      setting_button: () => cy.xpath('//span[@id = "tour`-side-combine-btn"]//a[@title = "Settings"]').scrollIntoView(),
      edit_button: () =>cy.xpath('//td[contains(text(),"tester11291")]/..//a[@title = "Edit"]'),
      delete_checkbox: () =>cy.get("#can_delete"),
      update_button: () =>cy.get(".submit-btn")
    };
  }
  visit(url){
    cy.visit(url);
  }
  enter_username(username){
    this.elements.username_textbox().type(username);
  }
  enter_password(password){
    this.elements.password_textbox().type(password);
  }
  click_login(){
    this.elements.login_button().click();
  }
  click_settings(){
    this.elements.setting_button().click();
  }
  click_edit(){
    this.elements.edit_button().click();
  }
  click_checkbox(){
    this.elements.delete_checkbox().click();
  }
  click_update(){
    this.elements.update_button().click({ multiple: true });
  }
}

export default LoginPage;