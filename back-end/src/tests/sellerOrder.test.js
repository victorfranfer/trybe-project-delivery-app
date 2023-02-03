const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas do vendedor', () => {
  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());

  it('Testando se o retorna um array com os pedidos do vendedor responsável', async () => {
    let postSellerOrder;
  
    try {
      postSellerOrder = await chai.request(app)
        .post('/seller/orders')
        .send({ id: 2 })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postSellerOrder;
    
    expect(status).to.be.eq(200);
  })

  it('Testando se retorna o pedido pelo id corretamente', async () => {
      let postSellerOrder;

      try {
        postSellerOrder = await chai.request(app)
          .get('/seller/orders/1')
          .send({})
      } catch (error) {
        console.error(error)
      }
      
      const { status } = postSellerOrder;

      expect(status).to.be.eq(200);
  })
})
