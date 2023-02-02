const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas de login', () => {
  it('Testando se retorna o status 200 com um login válido', async () => {
    let postLogin;
  
    try {
      postLogin = await chai.request(app)
        .post('/login')
        .send({
          "email": "zebirita@email.com",
          "password": "$#zebirita#$"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postLogin;

    expect(status).to.be.eq(200);
  })

  it('Testando se retorna o status 400 com o body sem password', async () => {
    let postLogin;
  
    try {
      postLogin = await chai.request(app)
        .post('/login')
        .send({
          "email": "zebirita@email.com",
        })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postLogin;

    expect(status).to.be.eq(400);
  })

  it('Testando se retorna o status 404 com o password inválido', async () => {
    let postLogin;
  
    try {
      postLogin = await chai.request(app)
        .post('/login')
        .send({
          "email": "zebirita@email.com",
          "password": "INVALIDPASS"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postLogin;

    expect(status).to.be.eq(404);
  })
})
