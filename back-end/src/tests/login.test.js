const chai = require('chai');
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

  it('Testando se retorna a mensagem ok se o token for válido', async () => {

    let postLogin;

    try {
      postLogin = await chai.request(app)
        .get('/validate')
        .send()
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1NDM1MDYzLCJleHAiOjE2NzYwMzk4NjN9.Fc4vr114woz9vylJgcAT0pnxK_tsh8ppJ_cVT4DhDIo")
    } catch (error) {
      console.error(error)
    }

    const { body } = postLogin;

    expect(body.message).to.be.eq("ok");
  })
})
