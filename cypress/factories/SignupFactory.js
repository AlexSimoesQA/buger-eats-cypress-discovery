var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliveryman: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '83999999999',
            address: {
                postalcode: '58255000',
                street: 'Rua do Osvaldo',
                number: '111',
                details: 'Apt 222',
                district: 'centro',
                city_state: 'Belém/PB'
            },
            delivery_method:'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}