const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const saleProductService = require('../api/Services/saleProductService');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas de vendas', () => {
  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());

  it('Testando se o retorna o status 201 se o pedido for registrado corretamente', async () => {
    sinon
      .stub(saleProductService, "createNewSaleProduct")
      .resolves({
        quantity: 1, 
        saleId: 1, 
        productId: 11
      })

    let postSale;
  
    try {
      postSale = await chai.request(app)
        .post('/sale/register-order')
        .send({
          deliveryAddress: "test",
          deliveryNumber: "test",
          sellerId: 2,
          totalPrice: 3.49,
          userId: 3,
          productIds: [{
            name: "Stella Artois 275ml",
            productId: 11,
            quantity: 1,
            subTotal: 3.49,
            unitPrice: 3.49
          }]
        })
    } catch (error) {
      console.error(error.message)
    }

    
    const { status } = postSale;

    expect(status).to.be.eq(201)
  })

  it('Testando se o retorna o status 201 se o pedido for marcada como entregue', async () => {
    let postSale;
  
    try {
      postSale = await chai.request(app)
        .put('/sale/order/1')
        .send({})
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postSale;

    expect(status).to.be.eq(201)
  })

  it('Testando se o retorna o status 201 se o pedido for marcada como em preparo', async () => {
    let postSale;
  
    try {
      postSale = await chai.request(app)
        .put('/sale/order/1')
        .send({ "status": "Em preparo" })
    } catch (error) {
      console.error(error.message)
    }

    const { status } = postSale;

    expect(status).to.be.eq(201)
  })

  it('Testando se retorna um erro se um produto não for encontrado', async () => {
    let postSale;

    try {
      postSale = await chai.request(app)
        .post('/sale/register-order')
        .send({
          "deliveryAddress": "teste",
          "deliveryNumber": "teste",
          "sellerId": 2,
          "totalPrice": 3.49,
          "userId": 3,
          "productIds": [{
            "name": "Stella Artois 275ml",
            "productId": 99,
            "quantity": 1,
            "subTotal": 3.49,
            "unitPrice": 3.49
          }]
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postSale;

    expect(body.message).to.be.eq('One or more products not found')
  })

  it('Testando se retorna um erro se o userId for inválido', async () => {
    let postSale;

    try {
      postSale = await chai.request(app)
        .post('/sale/register-order')
        .send({
          "deliveryAddress": "teste",
          "deliveryNumber": "teste",
          "sellerId": 2,
          "totalPrice": 3.49,
          "userId": 99,
          "productIds": [{
            "name": "Stella Artois 275ml",
            "productId": 99,
            "quantity": 1,
            "subTotal": 3.49,
            "unitPrice": 3.49
          }]
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postSale;

    expect(body.message).to.be.eq('User not fund')
  })

  it('Testando se retorna um erro se o sellerId for inválido', async () => {
    let postSale;

    try {
      postSale = await chai.request(app)
        .post('/sale/register-order')
        .send({
          "deliveryAddress": "teste",
          "deliveryNumber": "teste",
          "sellerId": 99,
          "totalPrice": 3.49,
          "userId": 3,
          "productIds": [{
            "name": "Stella Artois 275ml",
            "productId": 99,
            "quantity": 1,
            "subTotal": 3.49,
            "unitPrice": 3.49
          }]
        })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postSale;

    expect(body.message).to.be.eq('Seller not fund')
  })

})
