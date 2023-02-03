const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { User } = require('../database/models');

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
    sinon.stub(User, "create")
      .resolves({
        "id": 4,
        "name": "Teste Lucas Teste",
        "email": "test1@test.com",
        "password": "25f9e794323b453885f5181f1b624d0b",
        "role": "administrator"
      })

    let postRegister;
  
    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Teste Lucas Teste",
          "email": "test1@test.com",
          "password": "123456789",
          "role": "administrator"
        })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postRegister;

    expect(status).to.be.eq(201)
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
    sinon.stub(User, "create").
      resolves({
        "id": 8,
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
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1NDM1MDYzLCJleHAiOjE2NzYwMzk4NjN9.Fc4vr114woz9vylJgcAT0pnxK_tsh8ppJ_cVT4DhDIo")
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postRegister;

    expect(status).to.be.eq(201);
  })

  it('Testando se retorna um erro se a role não for admin', async () => {
    let postRegister;

    try {
      postRegister = await chai.request(app)
        .post('/admin/manage')
        .send({
          "name": "Test Test Lucas",
          "email": "lucastest@test.com",
          "password": "123456789",
          "role": "seller"
        })
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY3NTM5MjcxNiwiZXhwIjoxNjc1OTk3NTE2fQ.vTx3GH5oY-mOKTs1GurEL54zbZSTzOi-SWiV-YjJqqo")
    } catch (error) {
      console.error(error)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq("User is not administrator")
  })

  it('Testando se retorna um erro se ao criar um seller o email ja foi cadastrado', async () => {
    let postRegister;

    try {
      postRegister = await chai.request(app)
        .post('/admin/manage')
        .send({
          "name": "Test Test Lucas",
          "email": "fulana@deliveryapp.com",
          "password": "123456789",
          "role": "seller"
        })
        .set('authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1NDM1MDYzLCJleHAiOjE2NzYwMzk4NjN9.Fc4vr114woz9vylJgcAT0pnxK_tsh8ppJ_cVT4DhDIo")
    } catch (error) {
      console.error(error)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq("User already exists")
  })

  it('Testando se retorna um erro se o email já for cadastrado', async () => {
    let postRegister

    try {
      postRegister = await chai.request(app)
        .post('/register')
        .send({
          "name": "Teste Teste Lucas",
          "email": "zebirita@email.com",
          "password": "123456789",
        })
        .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1MzQ3MDAxLCJleHAiOjE2NzU0MzM0MDF9.tg-4sn6yxmeu85niZKurvFTrDRxIgEBgyzba-L0GZvc')
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postRegister;

    expect(body.message).to.be.eq('User already exists');
  })
})
