const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas de produtos', () => {
  it('Testando se retorna o status 200', async () => {
    let postProducts;
  
    try {
      postProducts = await chai.request(app)
        .get('/products')
        .send({})
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postProducts;

    expect(body.length).to.be.eq(11);
  })
})
