const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const userService = require('../api/Services/userService');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas de registro', () => {
  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());
  
  it('Testando se retorna um erro se o nome for inválido', async () => {
    let postRegister;
  
    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Test",
          "email": "test@test.com",
          "password": "123456789",
          "role": "admin"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq("Invalid name");
  })

  it('Testando se retorna um erro se o email for inválido', async () => {
    let postRegister;
  
    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Lucas Teste Teste",
          "email": "test",
          "password": "123456789",
          "role": "admin"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq("Invalid email");
  })

  it('Testando se retorna um erro se o password for inválido', async () => {
    let postRegister;
  
    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Lucas Teste Teste",
          "email": "test@test.com",
          "password": "123",
          "role": "admin"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq("Invalid password");
  })

  it('Testando se o retorno é correto se o user for criado corretamente', async () => {
    sinon
      .stub(userService, "createUser")
      .resolves({
        "id": 5,
        "name": "Teste Lucas Teste",
        "email": "test1@test.com",
        "password": "25f9e794323b453885f5181f1b624d0b",
        "role": "admin"
      });
    
    let postRegister;
  
    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Teste Lucas Teste",
          "email": "test1@test.com",
          "password": "123456789",
          "role": "admin"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body).to.be.deep.eq({
      "id": 5,
      "name": "Teste Lucas Teste",
      "email": "test1@test.com",
      "password": "25f9e794323b453885f5181f1b624d0b",
      "role": "admin"
    })
  })

  it('Testando se não passar um token retorna uma mensagem de erro', async () => {
    let postRegister

    try {
      postRegister = await chai.request(app)
        .post('/admin/manage')
        .send({})
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq('Token not found');
  })

  it('Testando se passar um token inválido retorna uma mensagem de erro', async () => {
    let postRegister

    try {
      postRegister = await chai.request(app)
        .post('/admin/manage')
        .send({})
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVjYXMgVGVzdGUgVGVzdGUiLCJlbWFpbCI6InRlc3QyQHRlc3QuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciJ9.nbd9pOsDSTmarJS52aVHezfth6Lsl-qNvK_oEdrNOqQ')
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq('Expired or invalid token');
  })

  it('Testando se cria um user seller corretamente', async () => {
    sinon
      .stub(userService, "adminCreateUser")
      .resolves({
        "id": 6,
        "name": "Teste Teste Lucas",
        "email": "lucastest@test.com",
        "password": "25f9e794323b453885f5181f1b624d0b",
        "role": "seller"
      })

    let postRegister

    try {
      postRegister = await chai.request(app)
        .post('/admin/manage')
        .send({
          "name": "Teste Teste Lucas",
          "email": "lucastest@test.com",
          "password": "123456789",
          "role": "seller"
        })
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1MzQ3MDAxLCJleHAiOjE2NzU0MzM0MDF9.tg-4sn6yxmeu85niZKurvFTrDRxIgEBgyzba-L0GZvc')
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body).to.be.deep.eq({
      "id": 6,
      "name": "Teste Teste Lucas",
      "email": "lucastest@test.com",
      "password": "25f9e794323b453885f5181f1b624d0b",
      "role": "seller"
    });
  })
})
