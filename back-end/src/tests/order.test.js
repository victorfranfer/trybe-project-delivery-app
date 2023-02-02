const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas de pedidos', () => {
  it('Testando se retorna o status 200', async () => {
    let postOrder;
  
    try {
      postOrder = await chai.request(app)
        .post('/customer/orders')
        .send({
          id: 1
        })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postOrder;

    expect(status).to.be.eq(200);
  })
})
