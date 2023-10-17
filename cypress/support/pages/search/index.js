import { el } from './elements'

class AgiPage {

    go() {
        cy.visit('/')
    }

    pesquisa(){
        cy.get(el.pesquisa)
            .click()
    }

    textopesquisa(texto){
        cy.xpath(el.campopesquisa)
           .type(texto.campopesquisa)
    }

    submit() {
        cy.xpath(el.submit)
            .click()
    }


}

export default new AgiPage()