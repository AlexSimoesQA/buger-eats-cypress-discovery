import signupPage from '../pages/SignupPage.cy';
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliveryman').then((d) => {
    //         this.deliveryman = d
    //     })
    // })

    it('User should be deliveryman', function () {

        var deliveryman = signupFactory.deliveryman()

        signupPage.go()
        signupPage.fillForm(deliveryman)
        signupPage.submit()
        //criado uma constante, pois a mensagem é muito grande
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliveryman = signupFactory.deliveryman()

        deliveryman.cpf = '000000014AA'

        signupPage.go()
        signupPage.fillForm(deliveryman)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliveryman = signupFactory.deliveryman()

        deliveryman.email = 'alex.com.br'

        signupPage.go()
        signupPage.fillForm(deliveryman)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {
        //foi criado a constante e feito um forEach para que, caso uma das mensagens falhe, o teste prossiga.
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function() {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})