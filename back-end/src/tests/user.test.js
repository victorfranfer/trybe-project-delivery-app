const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

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

  it('Testando se retorna todos os usuários', async () => {
    let postUser;
  
    try {
      postUser = await chai.request(app)
        .get('/user')
        .send({})
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1NDM1MDYzLCJleHAiOjE2NzYwMzk4NjN9.Fc4vr114woz9vylJgcAT0pnxK_tsh8ppJ_cVT4DhDIo")
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postUser;

    expect(body).to.be.deep.eq([
      {
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "role": "seller"
      },
      {
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "role": "customer"
      }
    ])
  })

  it('Testando se deleta um usuário corretamente', async () => {
    let postUser;

    try {
      await chai.request(app)
        .post('/register')
        .send({
          "name": "Test Lucas Test",
          "password": "123456789",
          "email": "lucasteste@test.com"
        })
    } catch (error) {
      console.error(error)
    }
  
    try {
      postUser = await chai.request(app)
        .delete('/user')
        .send({
          "email": "lucasteste@test.com"
        })
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1NDM1MDYzLCJleHAiOjE2NzYwMzk4NjN9.Fc4vr114woz9vylJgcAT0pnxK_tsh8ppJ_cVT4DhDIo")
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postUser;

    expect(body).to.be.deep.eq([
      {
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "role": "seller"
      },
      {
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "role": "customer"
      },
    ])
  })

  it('Testando se retorna um erro se o email for undefined', async () => {
    let postUser;
  
    try {
      postUser = await chai.request(app)
        .post('/user/email')
        .send({})
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postUser;

    expect(body.message).to.be.eq("Email inválido")
  })
})
