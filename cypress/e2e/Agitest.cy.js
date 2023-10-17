

import agiPage from '../support/pages/search'
import messages from '../support/components/message'



describe('Validação de Pesquisa', function () {

    context('quando a pesquisa é muito boa', function () {

        it('Deve realzar a pesquisa com sucesso', function () {
            agiPage.go()
            agiPage.pesquisa()
            cy.xpath('/html/body/header/div[1]/div[2]/form/label/input')
                .type('Teste')
            agiPage.submit()
            messages.haveText('Resultados da busca por')


        })

    })

    context('quando a pesquisa é ruim', function () {

        it('Deve realzar a pesquisa mas não retorna nenhum resultado', function () {
            agiPage.go()
            agiPage.pesquisa()
            cy.xpath('/html/body/header/div[1]/div[2]/form/label/input')
                .type('suahsua')
            agiPage.submit()
            cy.get('.entry-title').contains('Nenhum resultado')


        })


    })

})