
import { el } from './elements'


class Messages {
    haveText(expectedText){
        cy.contains(el.sucess, expectedText)
            .should('be.visible')
    }
    

}
export default new Messages()