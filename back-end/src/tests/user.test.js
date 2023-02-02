const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const saleService = require('../api/Services/saleService');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas do usuário', () => {
  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());

  it('Testando se retorna o seller corretamente', async () => {    
    let postUser;
  
    try {
      postUser = await chai.request(app)
        .get('/user/sellers')
        .send([
          {
            "name": "Fulana Pereira",
            "email": "fulana@deliveryapp.com",
            "role": "seller",
            "id": 2
          }
        ])
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postUser;

    expect(body).to.be.deep.eq([
      {
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "role": "seller",
        "id": 2
      }
    ])
  })

  it('Testando se retorna o usuário buscando pelo email', async () => {
    let postUser;
  
    try {
      postUser = await chai.request(app)
        .post('/user/email')
        .send({
          "email": "zebirita@email.com"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postUser;

    expect(body).to.be.deep.eq({
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "password": "1c37466c159755ce1fa181bd247cb925",
      "role": "customer"
    })
  })

})
